import { Card, CardContent, Avatar, Typography, Box, Chip } from '@mui/material'

interface UserProfileCardProps {
  name: string
  email?: string
  role?: string
  avatarUrl?: string
}

export function UserProfileCard({ name, email, role, avatarUrl }: UserProfileCardProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Avatar
            src={avatarUrl}
            alt={`Foto de ${name}`}
            sx={{
              width: 68,
              height: 68,
              bgcolor: 'primary.main',
              fontSize: '1.5rem',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {!avatarUrl && initials}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" fontWeight={700} noWrap>
              {name}
            </Typography>
            {email && (
              <Typography variant="body2" color="text.secondary" noWrap sx={{ mt: 0.25 }}>
                {email}
              </Typography>
            )}
            {role && (
              <Chip
                label={role}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mt: 0.75, fontWeight: 600 }}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
