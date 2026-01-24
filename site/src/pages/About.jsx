import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function About() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" paragraph>
        NorthWind Family Ministries is dedicated to supporting families and communities.
        This page will share our mission, values, and the story behind our work.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>Our Mission</Typography>
        <Typography variant="body2">
          Empower families through compassionate care, education, and community partnerships.
        </Typography>
      </Box>
    </Container>
  )
}
