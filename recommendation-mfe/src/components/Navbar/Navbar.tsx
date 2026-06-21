import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import type { ReactNode } from 'react'

interface NavbarProps {
  title?: string
  onMenuClick?: () => void
  actions?: ReactNode
}

export function Navbar({ title = 'Meu Plano de Aprendizagem', onMenuClick, actions }: NavbarProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'background.paper', color: 'text.primary', top: 0, zIndex: 1100 }}
    >
      <Toolbar sx={{ gap: 1, minHeight: { xs: 64, sm: 72 } }}>
        {onMenuClick && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Abrir menu de navegação"
            onClick={onMenuClick}
            size="large"
            sx={{ mr: 0.5 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="h1"
          sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main', letterSpacing: '-0.01em' }}
        >
          {title}
        </Typography>
        {actions && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>{actions}</Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
