export type ResourceType = 'article' | 'video' | 'course' | 'book' | 'tool' | 'other'

export interface Resource {
  id: string
  name: string
  description: string
  type: ResourceType
  url?: string
  tags?: string[]
  createdAt: string
  updatedAt: string
}

export interface CreateResourceDto {
  name: string
  description: string
  type: ResourceType
  url?: string
  tags?: string[]
}

export interface UpdateResourceDto {
  name?: string
  description?: string
  type?: ResourceType
  url?: string
  tags?: string[]
}

export const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
  article: 'Artigo',
  video: 'Vídeo',
  course: 'Curso',
  book: 'Livro',
  tool: 'Ferramenta',
  other: 'Outro',
}

export const RESOURCE_TYPE_COLORS: Record<
  ResourceType,
  'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
> = {
  article: 'info',
  video: 'warning',
  course: 'primary',
  book: 'secondary',
  tool: 'success',
  other: 'default',
}
