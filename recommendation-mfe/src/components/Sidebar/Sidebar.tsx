import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material'
import type { ReactNode } from 'react'

export interface SidebarItem {
  id: string
  label: string
  icon?: ReactNode
  onClick?: () => void
}

interface SidebarProps {
  open: boolean
  onClose: () => void
  title?: string
  items?: SidebarItem[]
  activeItemId?: string
  footer?: ReactNode
  width?: number
}

export function Sidebar({
  open,
  onClose,
  title,
  items = [],
  activeItemId,
  footer,
  width = 280,
}: SidebarProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width, display: 'flex', flexDirection: 'column', height: '100%' }}
        role="navigation"
        aria-label="Menu de navegação"
      >
        {title && (
          <>
            <Box sx={{ px: 3, py: 3 }}>
              <Typography variant="h6" fontWeight={700} color="primary.main">
                {title}
              </Typography>
            </Box>
            <Divider />
          </>
        )}

        <List sx={{ flex: 1, pt: 1.5, px: 1 }} aria-label="Itens do menu">
          {items.map((item) => {
            const isActive = item.id === activeItemId
            return (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  selected={isActive}
                  onClick={() => { item.onClick?.(); onClose() }}
                  aria-current={isActive ? 'page' : undefined}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      '& .MuiListItemIcon-root': { color: 'inherit' },
                      '&:hover': { bgcolor: 'primary.dark' },
                    },
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ minWidth: 42, color: isActive ? 'inherit' : 'text.secondary' }}>
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>

        {footer && (
          <>
            <Divider />
            <Box sx={{ p: 2 }}>{footer}</Box>
          </>
        )}
      </Box>
    </Drawer>
  )
}
