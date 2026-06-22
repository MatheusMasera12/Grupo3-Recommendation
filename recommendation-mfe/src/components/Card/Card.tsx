import {
  Card as MuiCard,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material'
import type { CardProps as MuiCardProps } from '@mui/material'
import type { ReactNode } from 'react'

interface CardProps extends MuiCardProps {
  title?: string
  subtitle?: string
  actions?: ReactNode
  children?: ReactNode
}

export function Card({ title, subtitle, actions, children, ...props }: CardProps) {
  return (
    <MuiCard {...props}>
      <CardContent>
        {title && (
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  )
}
