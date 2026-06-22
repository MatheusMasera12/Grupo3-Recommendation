import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#1a56a4', light: '#4b7dc8', dark: '#0d3d7a', contrastText: '#fff' },
    secondary: { main: '#0277bd', light: '#58a5f0', dark: '#004c8c', contrastText: '#fff' },
    success: { main: '#2e7d32', light: '#60ad5e', dark: '#005005', contrastText: '#fff' },
    warning: { main: '#e65100', light: '#ff833a', dark: '#ac1900', contrastText: '#fff' },
    error: { main: '#c62828', light: '#ff5f52', dark: '#8e0000', contrastText: '#fff' },
    background: { default: '#f4f6f9', paper: '#ffffff' },
    text: { primary: '#1a1a2e', secondary: '#4a5568' },
    divider: 'rgba(0,0,0,0.10)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h4: { fontWeight: 700, fontSize: '1.75rem', letterSpacing: '-0.01em', lineHeight: 1.3 },
    h5: { fontWeight: 700, fontSize: '1.375rem', letterSpacing: '-0.01em', lineHeight: 1.35 },
    h6: { fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.4 },
    subtitle1: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.5 },
    subtitle2: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.5 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '1rem', lineHeight: 1.65 },
    caption: { fontSize: '0.9375rem', lineHeight: 1.5 },
    button: { fontWeight: 600, fontSize: '1rem', letterSpacing: '0.01em', textTransform: 'none' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          minHeight: 48,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: '1rem',
        },
        sizeLarge: { minHeight: 56, paddingLeft: 28, paddingRight: 28 },
        sizeSmall: { minHeight: 44 },
        contained: { boxShadow: '0 1px 3px rgba(0,0,0,0.18)' },
      },
      defaultProps: { disableElevation: false },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 1px 4px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600, fontSize: '0.9375rem' },
        sizeSmall: { height: 36, fontSize: '0.875rem' },
      },
    },
    MuiTextField: { defaultProps: { variant: 'outlined' } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 8, fontSize: '1rem' },
        input: { padding: '14px 16px' },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { fontSize: '1rem' } },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '14px 16px', fontSize: '1rem' },
        head: { fontWeight: 700, fontSize: '0.875rem', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 16px' },
      },
    },
    MuiTableRow: {
      styleOverrides: { root: { '&:last-child td': { borderBottom: 0 } } },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none', borderBottom: '1px solid rgba(0,0,0,0.09)' },
      },
    },
    MuiDialog: {
      styleOverrides: { paper: { borderRadius: 16 } },
    },
    MuiDialogTitle: {
      styleOverrides: { root: { fontSize: '1.25rem', fontWeight: 700 } },
    },
    MuiAlert: {
      styleOverrides: { root: { fontSize: '1rem', borderRadius: 8 } },
    },
    MuiListItemButton: {
      styleOverrides: { root: { borderRadius: 8, minHeight: 48 } },
    },
    MuiTooltip: {
      styleOverrides: { tooltip: { fontSize: '0.9375rem' } },
    },
    MuiTablePagination: {
      styleOverrides: { select: { fontSize: '0.9375rem' } },
    },
  },
})
