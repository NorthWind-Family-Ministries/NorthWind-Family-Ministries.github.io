import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()
  const attempted = location?.pathname || '/'

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
        404 — Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        We couldn’t find a page at: <strong>{attempted}</strong>
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button component={RouterLink} to="/" variant="contained" color="primary">
          Go to Home
        </Button>
        <Button variant="outlined" color="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Stack>
      <Box sx={{ mt: 6 }}>
        <Typography variant="caption" color="text.secondary">
          If you believe this is an error, please let us know.
        </Typography>
      </Box>
    </Container>
  )
}
