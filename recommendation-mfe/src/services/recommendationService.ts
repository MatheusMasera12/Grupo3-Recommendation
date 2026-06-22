import type { Recommendation } from '@/types'
import { api } from './api'
import { parseResourceFromBackend, type BackendResource } from './resourceService'

interface BackendRecommendation {
  id: string | number
  userId: string | number
  description?: string
  resource?: BackendResource
  score?: number
  createdAt?: string
  updatedAt?: string
}

interface RecommendationsResponse {
  content?: BackendRecommendation[]
}

function parseRecommendationFromBackend(item: BackendRecommendation): Recommendation {
  return {
    id: String(item.id),
    resourceId: item.resource ? String(item.resource.id) : '',
    resource: item.resource ? parseResourceFromBackend(item.resource) : undefined,
    score: item.score !== undefined ? Number(item.score) : 0.88,
    reason: item.description || 'Recomendado com base no seu perfil',
    userId: String(item.userId),
    createdAt: item.createdAt || '',
    updatedAt: item.updatedAt || '',
  }
}

function getUserIdFromToken(): string | undefined {
  try {
    const token = localStorage.getItem('auth_token')
    if (!token) return undefined
    const parts = token.split('.')
    if (parts.length < 2) return undefined
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const payload = JSON.parse(decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')));
    return payload.idUser || payload.id || payload.sub
  } catch (err) {
    console.error('Error decoding token:', err)
    return undefined
  }
}

export async function fetchRecommendations(userId?: string): Promise<Recommendation[]> {
  const resolvedUserId = userId || getUserIdFromToken()
  if (!resolvedUserId) {
    return []
  }
  const { data } = await api.get<BackendRecommendation[] | RecommendationsResponse>(`/api/recommendations/user/${resolvedUserId}`)
  let items: BackendRecommendation[] = []
  if (data && Array.isArray(data)) {
    items = data
  } else if (data && typeof data === 'object' && 'content' in data && Array.isArray(data.content)) {
    items = data.content || []
  }
  return items.map(parseRecommendationFromBackend)
}

export async function fetchRecommendationById(id: string): Promise<Recommendation> {
  const { data } = await api.get<BackendRecommendation>(`/api/recommendations/${id}`)
  return parseRecommendationFromBackend(data)
}
