import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RecommendationCard } from './RecommendationCard'
import type { Recommendation } from '@/types'

// Mock do MUI Icon para evitar dependência pesada
vi.mock('@mui/icons-material/AutoAwesome', () => ({
  default: () => <span data-testid="icon-awesome" />,
}))

const mockRecommendation: Recommendation = {
  id: 'rec-1',
  resourceId: 'res-1',
  score: 0.85,
  reason: 'Baseado no seu perfil de iniciante em tecnologia',
  userId: 'user-1',
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-01-01T00:00:00Z',
  resource: {
    id: 'res-1',
    name: 'Introdução ao Computador',
    description: 'Material básico de informática para iniciantes',
    type: 'course',
    url: 'https://example.com/curso',
    tags: ['informática', 'básico'],
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
  },
}

describe('RecommendationCard', () => {
  it('deve renderizar o nome do recurso', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(screen.getByText('Introdução ao Computador')).toBeInTheDocument()
  })

  it('deve exibir o percentual de compatibilidade correto', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(screen.getByText('85%')).toBeInTheDocument()
  })

  it('deve exibir "Alta compatibilidade" para score >= 0.7', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(screen.getAllByText('Alta compatibilidade').length).toBeGreaterThan(0)
  })

  it('deve exibir "Compatibilidade média" para score entre 0.4 e 0.7', () => {
    const medium: Recommendation = { ...mockRecommendation, score: 0.55 }
    render(<RecommendationCard recommendation={medium} />)
    expect(screen.getAllByText('Compatibilidade média').length).toBeGreaterThan(0)
  })

  it('deve exibir "Compatibilidade baixa" para score < 0.4', () => {
    const low: Recommendation = { ...mockRecommendation, score: 0.2 }
    render(<RecommendationCard recommendation={low} />)
    expect(screen.getAllByText('Compatibilidade baixa').length).toBeGreaterThan(0)
  })

  it('deve exibir o label do tipo do recurso (Curso)', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(screen.getByText('Curso')).toBeInTheDocument()
  })

  it('deve exibir o motivo da recomendação', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(
      screen.getByText('Baseado no seu perfil de iniciante em tecnologia')
    ).toBeInTheDocument()
  })

  it('deve chamar onSelect com o id correto ao ser clicado', () => {
    const onSelect = vi.fn()
    render(<RecommendationCard recommendation={mockRecommendation} onSelect={onSelect} />)
    const card = screen.getByRole('button', { name: /Introdução ao Computador/i })
    fireEvent.click(card)
    expect(onSelect).toHaveBeenCalledWith('rec-1')
  })

  it('deve chamar onSelect ao pressionar Enter no card', () => {
    const onSelect = vi.fn()
    render(<RecommendationCard recommendation={mockRecommendation} onSelect={onSelect} />)
    const card = screen.getByRole('button', { name: /Introdução ao Computador/i })
    fireEvent.keyDown(card, { key: 'Enter' })
    expect(onSelect).toHaveBeenCalledWith('rec-1')
  })

  it('não deve ter role=button quando onSelect não é fornecido', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />)
    expect(screen.queryByRole('button', { name: /Introdução ao Computador/i })).toBeNull()
  })

  it('deve exibir ID do recurso como fallback quando resource é undefined', () => {
    const noResource: Recommendation = {
      ...mockRecommendation,
      resource: undefined,
    }
    render(<RecommendationCard recommendation={noResource} />)
    expect(screen.getByText('Recurso #res-1')).toBeInTheDocument()
  })
})
