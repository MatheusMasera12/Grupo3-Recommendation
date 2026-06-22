import { useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import { ResourceList } from '@/components/ResourceList'
import { ResourceForm } from '@/components/ResourceForm'
import { useResources } from '@/hooks/useResources'
import type { Resource, CreateResourceDto } from '@/types'

export default function ResourcePage() {
  const { resources, loading, error, create, update, remove } = useResources()
  const [formOpen, setFormOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const handleAdd = () => {
    setSelectedResource(null)
    setFormOpen(true)
  }

  const handleEdit = (resource: Resource) => {
    setSelectedResource(resource)
    setFormOpen(true)
  }

  const handleClose = () => {
    setFormOpen(false)
    setSelectedResource(null)
  }

  const handleSubmit = async (dto: CreateResourceDto) => {
    if (selectedResource) {
      await update(selectedResource.id, dto)
    } else {
      await create(dto)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
          Recursos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gerencie os recursos disponíveis para recomendação.
        </Typography>
      </Box>

      <ResourceList
        resources={resources}
        loading={loading}
        error={error}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={remove}
      />

      <ResourceForm
        open={formOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        resource={selectedResource}
      />
    </Container>
  )
}
