import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  LinearProgress,
} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import type { Recommendation } from '@/types'
import { RESOURCE_TYPE_LABELS, RESOURCE_TYPE_COLORS } from '@/types'

interface RecommendationCardProps {
  recommendation: Recommendation
  onSelect?: (id: string) => void
}

function getScoreColor(score: number): 'success' | 'warning' | 'error' {
  if (score >= 0.7) return 'success'
  if (score >= 0.4) return 'warning'
  return 'error'
}

function getScoreLabel(score: number): string {
  if (score >= 0.7) return 'Alta compatibilidade'
  if (score >= 0.4) return 'Compatibilidade média'
  return 'Compatibilidade baixa'
}

export function RecommendationCard({ recommendation, onSelect }: RecommendationCardProps) {
  const scorePercent = Math.round(recommendation.score * 100)
  const scoreColor = getScoreColor(recommendation.score)
  const resource = recommendation.resource

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': onSelect ? { transform: 'translateY(-3px)', boxShadow: 6 } : {},
        '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 2 },
      }}
      onClick={() => onSelect?.(recommendation.id)}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-label={resource?.name ? `Ver mais sobre: ${resource.name}` : 'Ver recomendação'}
      onKeyDown={
        onSelect
          ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(recommendation.id) } }
          : undefined
      }
    >
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <AutoAwesomeIcon color="primary" sx={{ fontSize: 18 }} aria-hidden="true" />
          <Typography variant="caption" color="primary.main" fontWeight={700}>
            Indicado para você
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
          sx={{
            lineHeight: 1.35,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {resource?.name ?? `Recurso #${recommendation.resourceId}`}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2.5,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {recommendation.reason}
        </Typography>

        <Box role="group" aria-label={`Compatibilidade: ${scorePercent}% — ${getScoreLabel(recommendation.score)}`}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Compatibilidade com seu perfil
            </Typography>
            <Typography variant="caption" fontWeight={700} color={`${scoreColor}.main`}>
              {scorePercent}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={scorePercent}
            color={scoreColor}
            sx={{ borderRadius: 3, height: 8, bgcolor: 'action.hover' }}
            aria-hidden="true"
          />
          <Typography variant="caption" color={`${scoreColor}.main`} fontWeight={600} sx={{ mt: 0.5, display: 'block' }}>
            {getScoreLabel(recommendation.score)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2.5, pt: 0 }}>
        {resource?.type && (
          <Chip
            label={RESOURCE_TYPE_LABELS[resource.type]}
            size="small"
            color={RESOURCE_TYPE_COLORS[resource.type]}
            variant="filled"
          />
        )}
      </CardActions>
    </Card>
  )
}
