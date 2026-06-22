import { useState, useEffect, useCallback } from 'react'
import type { Recommendation } from '@/types'
import { fetchRecommendations } from '@/services/recommendationService'

interface UseRecommendationsState {
  recommendations: Recommendation[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useRecommendations(userId?: string): UseRecommendationsState {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchRecommendations(userId)
      setRecommendations(data)
    } catch {
      setError('Erro ao carregar recomendações. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    void load()
  }, [load])

  return { recommendations, loading, error, refetch: load }
}
