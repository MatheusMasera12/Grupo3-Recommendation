import { importShared } from './__federation_fn_import-dSf-FNT7.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { c as createSvgIcon } from './createSvgIcon-BJia9uWz.js';
import { B as Button } from './Button-BZcTzjlq.js';
import { a as RESOURCE_TYPE_LABELS, R as RESOURCE_TYPE_COLORS, f as fetchResources, c as createResource, u as updateResource, d as deleteResource } from './resourceService-db-U-UsL.js';

const EditIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit');

const DeleteIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete');

const AddIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add');

const LibraryBooksIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z"
}), 'LibraryBooks');

const SearchOffIcon = createSvgIcon([/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19z"
}, "0"), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z"
}, "1")], 'SearchOff');

const SearchIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');

const ClearIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

const {useState: useState$4,useCallback: useCallback$2,useRef} = await importShared('react');

const {TextField: TextField$1,InputAdornment,IconButton: IconButton$1} = await importShared('@mui/material');
function SearchBar({
  placeholder = "Digite para buscar...",
  value: externalValue,
  onChange,
  onSearch,
  debounceMs = 400,
  label
}) {
  const [internalValue, setInternalValue] = useState$4("");
  const value = externalValue ?? internalValue;
  const debounceRef = useRef(null);
  const handleChange = useCallback$2(
    (e) => {
      const next = e.target.value;
      setInternalValue(next);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => onChange?.(next), debounceMs);
    },
    [onChange, debounceMs]
  );
  const handleClear = useCallback$2(() => {
    setInternalValue("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onChange?.("");
  }, [onChange]);
  const handleKeyDown = useCallback$2(
    (e) => {
      if (e.key === "Enter") onSearch?.(value);
    },
    [onSearch, value]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField$1,
    {
      fullWidth: true,
      variant: "outlined",
      placeholder,
      label,
      value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      inputProps: { "aria-label": label ?? placeholder, role: "searchbox" },
      sx: { "& .MuiOutlinedInput-root": { borderRadius: 3 } },
      slotProps: {
        input: {
          startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, { color: "action" }) }),
          endAdornment: value ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton$1,
            {
              onClick: handleClear,
              edge: "end",
              "aria-label": "Limpar campo de busca",
              size: "large",
              sx: { mr: -0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClearIcon, {})
            }
          ) }) : void 0
        }
      }
    }
  );
}

const {useState: useState$3,useMemo} = await importShared('react');

const {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination,Paper,Box: Box$2,Chip: Chip$1,IconButton,Tooltip,Typography: Typography$2,CircularProgress,Alert: Alert$1,Dialog: Dialog$1,DialogTitle: DialogTitle$1,DialogContent: DialogContent$1,DialogActions: DialogActions$1,Snackbar,Button:MuiButton} = await importShared('@mui/material');
const ROWS_PER_PAGE_OPTIONS = [10, 25, 50];
function ResourceList({
  resources,
  loading,
  error,
  onAdd,
  onEdit,
  onDelete,
  onRetry
}) {
  const [search, setSearch] = useState$3("");
  const [page, setPage] = useState$3(0);
  const [rowsPerPage, setRowsPerPage] = useState$3(10);
  const [deletingId, setDeletingId] = useState$3(null);
  const [confirmDelete, setConfirmDelete] = useState$3(null);
  const [snack, setSnack] = useState$3({ open: false, message: "", severity: "success" });
  const filtered = useMemo(() => {
    if (!search.trim()) return resources;
    const term = search.toLowerCase();
    return resources.filter(
      (r) => r.name.toLowerCase().includes(term) || r.description.toLowerCase().includes(term) || RESOURCE_TYPE_LABELS[r.type].toLowerCase().includes(term)
    );
  }, [resources, search]);
  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleDeleteConfirm = async () => {
    if (!confirmDelete) return;
    const { id, name } = confirmDelete;
    setConfirmDelete(null);
    setDeletingId(id);
    try {
      await onDelete(id);
      setSnack({ open: true, message: `"${name}" foi excluído com sucesso.`, severity: "success" });
    } catch {
      setSnack({ open: true, message: "Não foi possível excluir. Tente novamente.", severity: "error" });
    } finally {
      setDeletingId(null);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$2, { sx: { display: "flex", flexDirection: "column", alignItems: "center", py: 12, gap: 2.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 48, "aria-label": "Carregando materiais..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { color: "text.secondary", variant: "body1", children: "Carregando materiais de aprendizagem..." })
    ] });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { sx: { py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert$1,
      {
        severity: "error",
        role: "alert",
        action: onRetry && /* @__PURE__ */ jsxRuntimeExports.jsx(MuiButton, { color: "inherit", size: "small", onClick: onRetry, sx: { fontWeight: 600 }, children: "Tentar novamente" }),
        sx: { fontSize: "1rem" },
        children: error
      }
    ) });
  }
  const isEmpty = resources.length === 0;
  const isSearchEmpty = !isEmpty && filtered.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$2, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box$2,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          gap: 2,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { sx: { flex: "1 1 260px", maxWidth: 480 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchBar,
            {
              placeholder: "Buscar por nome ou tipo...",
              label: "Buscar materiais",
              onChange: (val) => {
                setSearch(val);
                setPage(0);
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}),
              onClick: onAdd,
              size: "large",
              sx: { flexShrink: 0 },
              children: "Adicionar material"
            }
          )
        ]
      }
    ),
    isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box$2,
      {
        sx: { textAlign: "center", py: 12 },
        role: "status",
        "aria-label": "Nenhum material cadastrado ainda",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LibraryBooksIcon, { sx: { fontSize: 72, color: "action.disabled", mb: 2 }, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { variant: "h5", fontWeight: 700, color: "text.secondary", gutterBottom: true, children: "Nenhum material cadastrado ainda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { variant: "body1", color: "text.disabled", sx: { mb: 4, maxWidth: 380, mx: "auto" }, children: "Adicione materiais de aprendizagem para que o sistema possa fazer recomendações personalizadas." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}), onClick: onAdd, size: "large", children: "Adicionar o primeiro material" })
        ]
      }
    ),
    isSearchEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box$2,
      {
        sx: { textAlign: "center", py: 10 },
        role: "status",
        "aria-label": `Nenhum resultado encontrado para: ${search}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SearchOffIcon, { sx: { fontSize: 60, color: "action.disabled", mb: 1.5 }, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography$2, { variant: "h6", fontWeight: 700, color: "text.secondary", children: [
            'Nenhum resultado para "',
            search,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { variant: "body2", color: "text.disabled", sx: { mt: 0.75 }, children: "Tente palavras diferentes ou apague o que digitou para ver todos os materiais." })
        ]
      }
    ),
    !isEmpty && !isSearchEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { variant: "outlined", sx: { borderRadius: 3, overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "aria-label": "Lista de materiais de aprendizagem", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { bgcolor: "grey.50" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Nome do material" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Tipo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { display: { xs: "none", md: "table-cell" } }, children: "Descrição" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", children: "Ações" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: paginated.map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { variant: "body2", fontWeight: 600, children: resource.name }),
            resource.url && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography$2,
              {
                variant: "caption",
                component: "a",
                href: resource.url,
                target: "_blank",
                rel: "noopener noreferrer",
                color: "primary.main",
                sx: { textDecoration: "none", "&:hover": { textDecoration: "underline" } },
                "aria-label": `Abrir ${resource.name} em nova aba`,
                children: "Abrir material ↗"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip$1,
            {
              label: RESOURCE_TYPE_LABELS[resource.type],
              size: "small",
              color: RESOURCE_TYPE_COLORS[resource.type],
              variant: "filled"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { display: { xs: "none", md: "table-cell" } }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$2,
            {
              variant: "body2",
              color: "text.secondary",
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: { md: 220, lg: 340 }
              },
              children: resource.description
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "right", sx: { whiteSpace: "nowrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Editar este material", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "large",
                onClick: () => onEdit(resource),
                "aria-label": `Editar: ${resource.name}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditIcon, {})
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Excluir este material", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                size: "large",
                color: "error",
                onClick: () => setConfirmDelete(resource),
                disabled: deletingId === resource.id,
                "aria-label": `Excluir: ${resource.name}`,
                children: deletingId === resource.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 22, color: "inherit" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, {})
              }
            ) })
          ] })
        ] }, resource.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination,
        {
          rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
          component: "div",
          count: filtered.length,
          rowsPerPage,
          page,
          onPageChange: (_, p) => setPage(p),
          onRowsPerPageChange: (e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          },
          labelRowsPerPage: "Por página:",
          labelDisplayedRows: ({ from, to, count }) => `Mostrando ${from}–${to} de ${count} materiais`
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog$1,
      {
        open: Boolean(confirmDelete),
        onClose: () => setConfirmDelete(null),
        maxWidth: "xs",
        fullWidth: true,
        "aria-labelledby": "confirm-delete-title",
        "aria-describedby": "confirm-delete-desc",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle$1, { id: "confirm-delete-title", children: "Excluir material" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent$1, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography$2, { id: "confirm-delete-desc", variant: "body1", children: [
              "Você tem certeza que deseja excluir",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                '"',
                confirmDelete?.name,
                '"'
              ] }),
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$2, { variant: "body2", color: "text.secondary", sx: { mt: 1.5 }, children: "Após excluir, este material não poderá mais ser recomendado. Esta ação não pode ser desfeita." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions$1, { sx: { px: 3, pb: 3, gap: 1.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MuiButton,
              {
                variant: "outlined",
                onClick: () => setConfirmDelete(null),
                size: "large",
                children: "Não, manter"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MuiButton,
              {
                variant: "contained",
                color: "error",
                onClick: () => {
                  void handleDeleteConfirm();
                },
                size: "large",
                children: "Sim, excluir"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Snackbar,
      {
        open: snack.open,
        autoHideDuration: 8e3,
        onClose: () => setSnack((s) => ({ ...s, open: false })),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Alert$1,
          {
            severity: snack.severity,
            onClose: () => setSnack((s) => ({ ...s, open: false })),
            sx: { fontSize: "1rem", minWidth: 280 },
            role: "status",
            children: snack.message
          }
        )
      }
    )
  ] });
}

const {useState: useState$2,useEffect: useEffect$1,useCallback: useCallback$1} = await importShared('react');

const {Dialog,DialogTitle,DialogContent,DialogActions,TextField,Select,MenuItem,FormControl,InputLabel,Box: Box$1,Alert,Chip,Stack,Typography: Typography$1,FormHelperText} = await importShared('@mui/material');
const RESOURCE_TYPES = ["article", "video", "course", "book", "tool", "other"];
const EMPTY_FORM = {
  name: "",
  description: "",
  type: "article",
  url: "",
  tags: []
};
function validateUrl(url) {
  if (!url) return null;
  try {
    new URL(url);
    return null;
  } catch {
    return "O endereço web informado não é válido. Exemplo: https://www.exemplo.com";
  }
}
function ResourceForm({ open, onClose, onSubmit, resource }) {
  const [form, setForm] = useState$2(EMPTY_FORM);
  const [tagInput, setTagInput] = useState$2("");
  const [loading, setLoading] = useState$2(false);
  const [error, setError] = useState$2(null);
  const [urlError, setUrlError] = useState$2(null);
  useEffect$1(() => {
    if (resource) {
      setForm({
        name: resource.name,
        description: resource.description,
        type: resource.type,
        url: resource.url ?? "",
        tags: resource.tags ?? []
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setTagInput("");
    setError(null);
    setUrlError(null);
  }, [resource, open]);
  const handleChange = useCallback$1(
    (field) => (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (field === "url") setUrlError(validateUrl(e.target.value));
    },
    []
  );
  const handleAddTag = useCallback$1(() => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !(form.tags ?? []).includes(tag)) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags ?? [], tag] }));
    }
    setTagInput("");
  }, [tagInput, form.tags]);
  const handleRemoveTag = useCallback$1((tag) => {
    setForm((prev) => ({ ...prev, tags: (prev.tags ?? []).filter((t) => t !== tag) }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Por favor, preencha o nome do material. Esse campo é obrigatório.");
      return;
    }
    if (urlError) {
      setError("Corrija o endereço web antes de continuar.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await onSubmit({
        ...form,
        url: form.url || void 0,
        tags: form.tags?.length ? form.tags : void 0
      });
      onClose();
    } catch {
      setError("Não foi possível salvar. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  const isEditing = Boolean(resource);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      open,
      onClose,
      maxWidth: "sm",
      fullWidth: true,
      "aria-labelledby": "resource-form-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        void handleSubmit(e);
      }, noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { id: "resource-form-title", sx: { pb: 1 }, children: isEditing ? "Editar material de aprendizagem" : "Adicionar novo material" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { sx: { display: "flex", flexDirection: "column", gap: 3, pt: 1 }, children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", role: "alert", "aria-live": "assertive", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Nome do material",
              required: true,
              fullWidth: true,
              value: form.name,
              onChange: handleChange("name"),
              helperText: "Ex: Introdução à informática, Curso de fotografia",
              inputProps: { "aria-required": true }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Descrição",
              fullWidth: true,
              multiline: true,
              rows: 3,
              value: form.description,
              onChange: handleChange("description"),
              helperText: "Descreva brevemente o que este material ensina"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "resource-type-label", children: "Tipo de material" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Select,
              {
                labelId: "resource-type-label",
                label: "Tipo de material",
                value: form.type,
                onChange: (e) => setForm((prev) => ({ ...prev, type: e.target.value })),
                children: RESOURCE_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t, children: RESOURCE_TYPE_LABELS[t] }, t))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: "Selecione o formato deste material" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              label: "Endereço web (opcional)",
              fullWidth: true,
              type: "url",
              value: form.url,
              onChange: handleChange("url"),
              error: Boolean(urlError),
              helperText: urlError ?? "Cole aqui o link do material, se houver",
              inputProps: { "aria-invalid": Boolean(urlError) }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { sx: { display: "flex", gap: 1, alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "Etiquetas (opcional)",
                  sx: { flex: 1 },
                  value: tagInput,
                  onChange: (e) => setTagInput(e.target.value),
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  },
                  helperText: "Ex: saúde, tecnologia, culinária"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outlined",
                  onClick: handleAddTag,
                  disabled: !tagInput.trim(),
                  sx: { mt: "4px", whiteSpace: "nowrap", flexShrink: 0 },
                  "aria-label": "Adicionar etiqueta",
                  children: "+ Adicionar"
                }
              )
            ] }),
            (form.tags?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 0.75, sx: { mt: 1.5 }, children: form.tags?.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: tag,
                size: "small",
                onDelete: () => handleRemoveTag(tag),
                color: "primary",
                variant: "outlined",
                "aria-label": `Remover etiqueta: ${tag}`
              },
              tag
            )) })
          ] }),
          !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, { variant: "body2", color: "text.secondary", sx: { mt: -1 }, children: "Apenas o nome é obrigatório. Os outros campos são opcionais." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { sx: { px: 3, pb: 3, gap: 1.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, disabled: loading, children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", loading, size: "large", children: isEditing ? "Salvar alterações" : "Adicionar material" })
        ] })
      ] })
    }
  );
}

const {useState: useState$1,useEffect,useCallback} = await importShared('react');
function useResources() {
  const [resources, setResources] = useState$1([]);
  const [loading, setLoading] = useState$1(true);
  const [error, setError] = useState$1(null);
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchResources();
      setResources(data);
    } catch {
      setError("Erro ao carregar recursos.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    void load();
  }, [load]);
  const create = useCallback(async (dto) => {
    const created = await createResource(dto);
    setResources((prev) => [created, ...prev]);
  }, []);
  const update = useCallback(async (id, dto) => {
    const updated = await updateResource(id, dto);
    setResources((prev) => prev.map((r) => r.id === id ? updated : r));
  }, []);
  const remove = useCallback(async (id) => {
    await deleteResource(id);
    setResources((prev) => prev.filter((r) => r.id !== id));
  }, []);
  return { resources, loading, error, create, update, remove, refetch: load };
}

const {useState} = await importShared('react');

const {Container,Box,Typography} = await importShared('@mui/material');
function ResourcePage() {
  const { resources, loading, error, create, update, remove } = useResources();
  const [formOpen, setFormOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const handleAdd = () => {
    setSelectedResource(null);
    setFormOpen(true);
  };
  const handleEdit = (resource) => {
    setSelectedResource(resource);
    setFormOpen(true);
  };
  const handleClose = () => {
    setFormOpen(false);
    setSelectedResource(null);
  };
  const handleSubmit = async (dto) => {
    if (selectedResource) {
      await update(selectedResource.id, dto);
    } else {
      await create(dto);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { maxWidth: "lg", sx: { py: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", component: "h1", fontWeight: 700, gutterBottom: true, children: "Recursos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", color: "text.secondary", children: "Gerencie os recursos disponíveis para recomendação." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResourceList,
      {
        resources,
        loading,
        error,
        onAdd: handleAdd,
        onEdit: handleEdit,
        onDelete: remove
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResourceForm,
      {
        open: formOpen,
        onClose: handleClose,
        onSubmit: handleSubmit,
        resource: selectedResource
      }
    )
  ] });
}

export { ResourcePage as default };
