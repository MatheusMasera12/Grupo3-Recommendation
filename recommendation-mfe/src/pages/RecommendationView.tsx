import { ThemeProvider, CssBaseline, Container, Box, Typography, CircularProgress, Alert, Button } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import { theme } from '@/theme'
import { RecommendationCard } from '@/components/RecommendationCard'
import { useRecommendations } from '@/hooks/useRecommendations'

function RecommendationContent() {
  const { recommendations, loading, error, refetch } = useRecommendations()

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={refetch}>
            Tentar novamente
          </Button>
        }
      >
        {error}
      </Alert>
    )
  }

  if (recommendations.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Nenhuma recomendação disponível no momento.
        </Typography>
      </Box>
    )
  }

  return (
    <Grid2 container spacing={3}>
      {recommendations.map((rec) => (
        <Grid2 key={rec.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <RecommendationCard recommendation={rec} />
        </Grid2>
      ))}
    </Grid2>
  )
}

export default function RecommendationView() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
            Recomendações
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Recursos selecionados especialmente para você.
          </Typography>
        </Box>
        <RecommendationContent />
      </Container>
    </ThemeProvider>
  )
}
