import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Hero from '../../components/Hero'

export default function History() {
  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      alt: 'Historical journey collage',
      title: 'Our History',
      subtitle: 'A journey of serving families with hope and healing.',
      ctaLabel: 'Donate',
      ctaHref: '/donate',
    },
  ]

  return (
    <>
      <Hero
        slides={slides}
        overlayMode="per-slide"
        height="50vh"
        align="center"
        darkOverlay
        showIndicators={false}
      />
      <Container sx={{ py: 4 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Our History
          </Typography>
          <Typography variant="body2" paragraph>
            Our story is rooted in our belief that Creator God desires to have a personal relationship with each of us. Historically, we as humankind have chosen to go our own way; we all need God’s forgiveness, healing and hope. NorthWind’ s story is an interwoven tapestry of team members’ stories: stories of a calling to serve those that are hurting and made vulnerable by the circumstances in life; stories of our own healing journey.
          </Typography>
          <Typography variant="body2">
            Today, we continue to expand our reach and impact, always guided by
            the needs of the families we serve.
          </Typography>
        </Box>
      </Container>
    </>
  )
}
