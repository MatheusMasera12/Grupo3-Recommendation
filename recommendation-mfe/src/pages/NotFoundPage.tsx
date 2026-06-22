import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Typography variant="h1" fontWeight={900} color="primary.main" lineHeight={1}>
          404
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          Página não encontrada
        </Typography>
        <Typography color="text.secondary">
          A página que você está procurando não existe ou foi movida.
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large">
            Voltar ao início
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
