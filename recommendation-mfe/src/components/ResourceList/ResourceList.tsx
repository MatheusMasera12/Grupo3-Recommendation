import { useState, useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Typography,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Button as MuiButton,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { Button } from '@/components/Button'
import { SearchBar } from '@/components/SearchBar'
import type { Resource } from '@/types'
import { RESOURCE_TYPE_LABELS, RESOURCE_TYPE_COLORS } from '@/types'

interface ResourceListProps {
  resources: Resource[]
  loading: boolean
  error: string | null
  onAdd: () => void
  onEdit: (resource: Resource) => void
  onDelete: (id: string) => Promise<void>
  onRetry?: () => void
}

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50]

interface SnackState {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

export function ResourceList({
  resources,
  loading,
  error,
  onAdd,
  onEdit,
  onDelete,
  onRetry,
}: ResourceListProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<Resource | null>(null)
  const [snack, setSnack] = useState<SnackState>({ open: false, message: '', severity: 'success' })

  const filtered = useMemo(() => {
    if (!search.trim()) return resources
    const term = search.toLowerCase()
    return resources.filter(
      (r) =>
        r.name.toLowerCase().includes(term) ||
        r.description.toLowerCase().includes(term) ||
        RESOURCE_TYPE_LABELS[r.type].toLowerCase().includes(term),
    )
  }, [resources, search])

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const handleDeleteConfirm = async () => {
    if (!confirmDelete) return
    const { id, name } = confirmDelete
    setConfirmDelete(null)
    setDeletingId(id)
    try {
      await onDelete(id)
      setSnack({ open: true, message: `"${name}" foi excluído com sucesso.`, severity: 'success' })
    } catch {
      setSnack({ open: true, message: 'Não foi possível excluir. Tente novamente.', severity: 'error' })
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 12, gap: 2.5 }}>
        <CircularProgress size={48} aria-label="Carregando materiais..." />
        <Typography color="text.secondary" variant="body1">
          Carregando materiais de aprendizagem...
        </Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ py: 4 }}>
        <Alert
          severity="error"
          role="alert"
          action={
            onRetry && (
              <MuiButton color="inherit" size="small" onClick={onRetry} sx={{ fontWeight: 600 }}>
                Tentar novamente
              </MuiButton>
            )
          }
          sx={{ fontSize: '1rem' }}
        >
          {error}
        </Alert>
      </Box>
    )
  }

  const isEmpty = resources.length === 0
  const isSearchEmpty = !isEmpty && filtered.length === 0

  return (
    <Box>
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ flex: '1 1 260px', maxWidth: 480 }}>
          <SearchBar
            placeholder="Buscar por nome ou tipo..."
            label="Buscar materiais"
            onChange={(val) => { setSearch(val); setPage(0) }}
          />
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAdd}
          size="large"
          sx={{ flexShrink: 0 }}
        >
          Adicionar material
        </Button>
      </Box>

      {/* Empty state — no data at all */}
      {isEmpty && (
        <Box
          sx={{ textAlign: 'center', py: 12 }}
          role="status"
          aria-label="Nenhum material cadastrado ainda"
        >
          <LibraryBooksIcon sx={{ fontSize: 72, color: 'action.disabled', mb: 2 }} aria-hidden="true" />
          <Typography variant="h5" fontWeight={700} color="text.secondary" gutterBottom>
            Nenhum material cadastrado ainda
          </Typography>
          <Typography variant="body1" color="text.disabled" sx={{ mb: 4, maxWidth: 380, mx: 'auto' }}>
            Adicione materiais de aprendizagem para que o sistema possa fazer recomendações personalizadas.
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd} size="large">
            Adicionar o primeiro material
          </Button>
        </Box>
      )}

      {/* Empty state — search with no results */}
      {isSearchEmpty && (
        <Box
          sx={{ textAlign: 'center', py: 10 }}
          role="status"
          aria-label={`Nenhum resultado encontrado para: ${search}`}
        >
          <SearchOffIcon sx={{ fontSize: 60, color: 'action.disabled', mb: 1.5 }} aria-hidden="true" />
          <Typography variant="h6" fontWeight={700} color="text.secondary">
            Nenhum resultado para "{search}"
          </Typography>
          <Typography variant="body2" color="text.disabled" sx={{ mt: 0.75 }}>
            Tente palavras diferentes ou apague o que digitou para ver todos os materiais.
          </Typography>
        </Box>
      )}

      {/* Table */}
      {!isEmpty && !isSearchEmpty && (
        <Paper variant="outlined" sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <TableContainer>
            <Table aria-label="Lista de materiais de aprendizagem">
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell>Nome do material</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Descrição</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginated.map((resource) => (
                  <TableRow key={resource.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {resource.name}
                      </Typography>
                      {resource.url && (
                        <Typography
                          variant="caption"
                          component="a"
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary.main"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          aria-label={`Abrir ${resource.name} em nova aba`}
                        >
                          Abrir material ↗
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={RESOURCE_TYPE_LABELS[resource.type]}
                        size="small"
                        color={RESOURCE_TYPE_COLORS[resource.type]}
                        variant="filled"
                      />
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: { md: 220, lg: 340 },
                        }}
                      >
                        {resource.description}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                      <Tooltip title="Editar este material">
                        <IconButton
                          size="large"
                          onClick={() => onEdit(resource)}
                          aria-label={`Editar: ${resource.name}`}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir este material">
                        <IconButton
                          size="large"
                          color="error"
                          onClick={() => setConfirmDelete(resource)}
                          disabled={deletingId === resource.id}
                          aria-label={`Excluir: ${resource.name}`}
                        >
                          {deletingId === resource.id ? (
                            <CircularProgress size={22} color="inherit" />
                          ) : (
                            <DeleteIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            component="div"
            count={filtered.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, p) => setPage(p)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10))
              setPage(0)
            }}
            labelRowsPerPage="Por página:"
            labelDisplayedRows={({ from, to, count }) =>
              `Mostrando ${from}–${to} de ${count} materiais`
            }
          />
        </Paper>
      )}

      {/* Delete confirmation dialog */}
      <Dialog
        open={Boolean(confirmDelete)}
        onClose={() => setConfirmDelete(null)}
        maxWidth="xs"
        fullWidth
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-desc"
      >
        <DialogTitle id="confirm-delete-title">Excluir material</DialogTitle>
        <DialogContent>
          <Typography id="confirm-delete-desc" variant="body1">
            Você tem certeza que deseja excluir{' '}
            <strong>"{confirmDelete?.name}"</strong>?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            Após excluir, este material não poderá mais ser recomendado. Esta ação não pode ser desfeita.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, gap: 1.5 }}>
          <MuiButton
            variant="outlined"
            onClick={() => setConfirmDelete(null)}
            size="large"
          >
            Não, manter
          </MuiButton>
          <MuiButton
            variant="contained"
            color="error"
            onClick={() => { void handleDeleteConfirm() }}
            size="large"
          >
            Sim, excluir
          </MuiButton>
        </DialogActions>
      </Dialog>

      {/* Feedback snackbar */}
      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ fontSize: '1rem', minWidth: 280 }}
          role="status"
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
