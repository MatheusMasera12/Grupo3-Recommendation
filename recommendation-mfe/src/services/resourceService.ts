import type { Resource, CreateResourceDto, UpdateResourceDto } from '@/types'
import { api } from './api'

export interface BackendResource {
  id: string | number
  name: string
  description?: string
  url?: string
  competencyId?: number
  level?: string
  createdAt?: string
  updatedAt?: string
}

interface ApiResponse {
  content?: BackendResource[]
}

export function parseResourceFromBackend(item: BackendResource): Resource {
  let type: Resource['type'] = 'other'
  let description = item.description || ''
  
  const match = description.match(/\[type:(\w+)\]/)
  if (match) {
    const rawType = match[1]
    const validTypes: Resource['type'][] = ['article', 'video', 'course', 'book', 'tool', 'other']
    if (validTypes.includes(rawType as Resource['type'])) {
      type = rawType as Resource['type']
    }
    description = description.replace(/ ?\[type:\w+\]/, '').trim()
  }
  
  return {
    id: String(item.id),
    name: item.name || '',
    description,
    type,
    url: item.url,
    createdAt: item.createdAt || '',
    updatedAt: item.updatedAt || '',
  }
}

export async function fetchResources(): Promise<Resource[]> {
  const { data } = await api.get<BackendResource[] | ApiResponse>('/api/resources')
  let items: BackendResource[] = []
  if (data && Array.isArray(data)) {
    items = data
  } else if (data && typeof data === 'object' && 'content' in data && Array.isArray(data.content)) {
    items = data.content || []
  }
  return items.map(parseResourceFromBackend)
}

export async function createResource(dto: CreateResourceDto): Promise<Resource> {
  const description = `${dto.description || ''} [type:${dto.type || 'other'}]`.trim()
  const payload = {
    name: dto.name,
    description,
    url: dto.url || 'https://exemplo.com',
    level: 'BEGINNER',
    competencyId: 1,
  }
  const { data } = await api.post<BackendResource>('/api/resources', payload)
  return parseResourceFromBackend(data)
}

export async function updateResource(id: string, dto: UpdateResourceDto): Promise<Resource> {
  let description = dto.description
  if (description !== undefined && dto.type) {
    description = `${description} [type:${dto.type}]`.trim()
  }
  const payload = {
    name: dto.name,
    description,
    url: dto.url || 'https://exemplo.com',
    level: 'BEGINNER',
    competencyId: 1,
  }
  const { data } = await api.put<BackendResource>(`/api/resources/${id}`, payload)
  return parseResourceFromBackend(data)
}

export async function deleteResource(id: string): Promise<void> {
  await api.delete(`/api/resources/${id}`)
}
