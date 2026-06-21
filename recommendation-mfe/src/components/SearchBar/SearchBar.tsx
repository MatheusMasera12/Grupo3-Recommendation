import { useState, useCallback, useRef } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  debounceMs?: number
  label?: string
}

export function SearchBar({
  placeholder = 'Digite para buscar...',
  value: externalValue,
  onChange,
  onSearch,
  debounceMs = 400,
  label,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('')
  const value = externalValue ?? internalValue
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value
      setInternalValue(next)
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => onChange?.(next), debounceMs)
    },
    [onChange, debounceMs],
  )

  const handleClear = useCallback(() => {
    setInternalValue('')
    if (debounceRef.current) clearTimeout(debounceRef.current)
    onChange?.('')
  }, [onChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') onSearch?.(value)
    },
    [onSearch, value],
  )

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      inputProps={{ 'aria-label': label ?? placeholder, role: 'searchbox' }}
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClear}
                edge="end"
                aria-label="Limpar campo de busca"
                size="large"
                sx={{ mr: -0.5 }}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  )
}
