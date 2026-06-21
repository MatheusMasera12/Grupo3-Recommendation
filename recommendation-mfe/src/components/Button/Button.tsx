import { Button as MuiButton, CircularProgress, Box } from '@mui/material'
import type { ButtonProps as MuiButtonProps } from '@mui/material'

interface ButtonProps extends MuiButtonProps {
  loading?: boolean
}

export function Button({ loading = false, disabled, children, ...props }: ButtonProps) {
  return (
    <MuiButton disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={18} color="inherit" aria-hidden="true" />
          {children}
        </Box>
      ) : children}
    </MuiButton>
  )
}
