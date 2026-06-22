import { useState, useEffect, useCallback } from 'react'
import type { Resource, CreateResourceDto, UpdateResourceDto } from '@/types'
import {
  fetchResources,
  createResource,
  updateResource,
  deleteResource,
} from '@/services/resourceService'

interface UseResourcesState {
  resources: Resource[]
  loading: boolean
  error: string | null
  create: (dto: CreateResourceDto) => Promise<void>
  update: (id: string, dto: UpdateResourceDto) => Promise<void>
  remove: (id: string) => Promise<void>
  refetch: () => void
}

export function useResources(): UseResourcesState {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchResources()
      setResources(data)
    } catch {
      setError('Erro ao carregar recursos.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const create = useCallback(async (dto: CreateResourceDto) => {
    const created = await createResource(dto)
    setResources((prev) => [created, ...prev])
  }, [])

  const update = useCallback(async (id: string, dto: UpdateResourceDto) => {
    const updated = await updateResource(id, dto)
    setResources((prev) => prev.map((r) => (r.id === id ? updated : r)))
  }, [])

  const remove = useCallback(async (id: string) => {
    await deleteResource(id)
    setResources((prev) => prev.filter((r) => r.id !== id))
  }, [])

  return { resources, loading, error, create, update, remove, refetch: load }
}
