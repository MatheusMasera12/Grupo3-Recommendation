import { useState, useEffect, useCallback } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Alert,
  Chip,
  Stack,
  Typography,
  FormHelperText,
} from '@mui/material'
import { Button } from '@/components/Button'
import type { Resource, CreateResourceDto, ResourceType } from '@/types'
import { RESOURCE_TYPE_LABELS } from '@/types'

const RESOURCE_TYPES: ResourceType[] = ['article', 'video', 'course', 'book', 'tool', 'other']

interface ResourceFormProps {
  open: boolean
  onClose: () => void
  onSubmit: (dto: CreateResourceDto) => Promise<void>
  resource?: Resource | null
}

const EMPTY_FORM: CreateResourceDto = {
  name: '',
  description: '',
  type: 'article',
  url: '',
  tags: [],
}

function validateUrl(url: string): string | null {
  if (!url) return null
  try {
    new URL(url)
    return null
  } catch {
    return 'O endereço web informado não é válido. Exemplo: https://www.exemplo.com'
  }
}

export function ResourceForm({ open, onClose, onSubmit, resource }: ResourceFormProps) {
  const [form, setForm] = useState<CreateResourceDto>(EMPTY_FORM)
  const [tagInput, setTagInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [urlError, setUrlError] = useState<string | null>(null)

  useEffect(() => {
    if (resource) {
      setForm({
        name: resource.name,
        description: resource.description,
        type: resource.type,
        url: resource.url ?? '',
        tags: resource.tags ?? [],
      })
    } else {
      setForm(EMPTY_FORM)
    }
    setTagInput('')
    setError(null)
    setUrlError(null)
  }, [resource, open])

  const handleChange = useCallback(
    (field: keyof CreateResourceDto) =>
      (
        e:
          | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          | { target: { value: string } },
      ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
        if (field === 'url') setUrlError(validateUrl(e.target.value))
      },
    [],
  )

  const handleAddTag = useCallback(() => {
    const tag = tagInput.trim().toLowerCase()
    if (tag && !(form.tags ?? []).includes(tag)) {
      setForm((prev) => ({ ...prev, tags: [...(prev.tags ?? []), tag] }))
    }
    setTagInput('')
  }, [tagInput, form.tags])

  const handleRemoveTag = useCallback((tag: string) => {
    setForm((prev) => ({ ...prev, tags: (prev.tags ?? []).filter((t) => t !== tag) }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('Por favor, preencha o nome do material. Esse campo é obrigatório.')
      return
    }
    if (urlError) {
      setError('Corrija o endereço web antes de continuar.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      await onSubmit({
        ...form,
        url: form.url || undefined,
        tags: form.tags?.length ? form.tags : undefined,
      })
      onClose()
    } catch {
      setError('Não foi possível salvar. Verifique sua conexão e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const isEditing = Boolean(resource)

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="resource-form-title"
    >
      <form onSubmit={(e) => { void handleSubmit(e) }} noValidate>
        <DialogTitle id="resource-form-title" sx={{ pb: 1 }}>
          {isEditing ? 'Editar material de aprendizagem' : 'Adicionar novo material'}
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
            {error && (
              <Alert severity="error" role="alert" aria-live="assertive">
                {error}
              </Alert>
            )}

            <TextField
              label="Nome do material"
              required
              fullWidth
              value={form.name}
              onChange={handleChange('name')}
              helperText="Ex: Introdução à informática, Curso de fotografia"
              inputProps={{ 'aria-required': true }}
            />

            <TextField
              label="Descrição"
              fullWidth
              multiline
              rows={3}
              value={form.description}
              onChange={handleChange('description')}
              helperText="Descreva brevemente o que este material ensina"
            />

            <FormControl fullWidth>
              <InputLabel id="resource-type-label">Tipo de material</InputLabel>
              <Select
                labelId="resource-type-label"
                label="Tipo de material"
                value={form.type}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, type: e.target.value as ResourceType }))
                }
              >
                {RESOURCE_TYPES.map((t) => (
                  <MenuItem key={t} value={t}>
                    {RESOURCE_TYPE_LABELS[t]}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Selecione o formato deste material</FormHelperText>
            </FormControl>

            <TextField
              label="Endereço web (opcional)"
              fullWidth
              type="url"
              value={form.url}
              onChange={handleChange('url')}
              error={Boolean(urlError)}
              helperText={urlError ?? 'Cole aqui o link do material, se houver'}
              inputProps={{ 'aria-invalid': Boolean(urlError) }}
            />

            <Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <TextField
                  label="Etiquetas (opcional)"
                  sx={{ flex: 1 }}
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleAddTag()
                    }
                  }}
                  helperText="Ex: saúde, tecnologia, culinária"
                />
                <Button
                  variant="outlined"
                  onClick={handleAddTag}
                  disabled={!tagInput.trim()}
                  sx={{ mt: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}
                  aria-label="Adicionar etiqueta"
                >
                  + Adicionar
                </Button>
              </Box>
              {(form.tags?.length ?? 0) > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 1.5 }}>
                  {form.tags?.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      onDelete={() => handleRemoveTag(tag)}
                      color="primary"
                      variant="outlined"
                      aria-label={`Remover etiqueta: ${tag}`}
                    />
                  ))}
                </Stack>
              )}
            </Box>

            {!isEditing && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: -1 }}>
                Apenas o nome é obrigatório. Os outros campos são opcionais.
              </Typography>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3, gap: 1.5 }}>
          <Button variant="outlined" onClick={onClose} disabled={loading}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" loading={loading} size="large">
            {isEditing ? 'Salvar alterações' : 'Adicionar material'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
