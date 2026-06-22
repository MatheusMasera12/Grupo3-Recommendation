import { TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'

export function Input(props: TextFieldProps) {
  return <TextField fullWidth variant="outlined" {...props} />
}
