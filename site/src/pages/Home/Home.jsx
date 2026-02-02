import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Hero from '../../components/Hero'
import WhatWeDoSection from './WhatWeDoSection'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            src: '/images/areas/landbased.jpg',
            alt: 'Community gathering',
            title: 'Welcome to NorthWind Family Ministries',
            subtitle: 'Strengthening families, fostering hope, and serving our community.',
            ctaLabel: 'Donate',
            ctaHref: '/donate',
          },
          {
            src: '/images/areas/counselling.jpg',
            alt: 'Counseling and care',
            title: 'Counseling & Care',
            subtitle: 'Compassionate support for growth, healing, and resilience.',
            ctaLabel: 'Learn More',
            ctaHref: '/who-we-are',
          },
          {
            src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=2096&q=80',
            alt: 'Community support and togetherness',
            title: 'Join Our Mission',
            subtitle: 'Together, we can make a meaningful difference.',
            ctaLabel: 'Get Involved',
            ctaHref: '/donate',
          },
        ]}
        intervalMs={9000}
        height="65vh"
        overlayMode="per-slide"
        align="center"
        darkOverlay
      />
      {/* Who we serve */}
      <Typography variant="h4" component="h2" align="center" sx={{ mt: 6 }}>
        Who We Serve
      </Typography>
      <Container sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" paragraph>
          We are dedicated to serving diverse communities through our four specialized care sectors. Each sector is designed to address unique needs and provide comprehensive support to those we serve.
        </Typography>
        <Button variant="contained" color="primary" href="/who-we-serve">
          Explore Our Care Sectors
        </Button>
      </Container>

      {/* What we do */}
      <Hero 
        slides={[
          {
            src: '/images/areas/spiritual-growth.jpg',
            alt: 'What We Do',
          },
        ]}
        overlayMode="static"
        staticOverlay={{
          title: 'What We Do',
          subtitle: 'Explore our four pillars and programs.',
          ctaLabel: 'Learn More',
          ctaHref: '/what-we-do',
        }}
        height="50vh"
        align="center"
        darkOverlay
        showIndicators
      />

      {/* What we do description */}
      <Container sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="body1" paragraph>
          At NorthWind Family Ministries, we are committed to holistic care through our four pillars: Counseling & Care, LifeBuild, Community Outreach, and Spiritual Growth. Each pillar is designed to empower individuals and families on their journey towards healing and wholeness.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Link component={RouterLink} to="/counselling" underline="hover" color="primary">Counselling</Link>
          <Link component={RouterLink} to="/lifebuild" underline="hover" color="primary">LifeBuild</Link>
          <Link component={RouterLink} to="/landbase" underline="hover" color="primary">Land Based</Link>
          <Link component={RouterLink} to="/spiritualgrowth" underline="hover" color="primary">Spiritual Growth</Link>
        </Box>
        <Button variant="contained" color="primary" href="/what-we-do">
          Discover Our Programs
        </Button>
      </Container>



      
      <Hero
        slides={[
          {
            src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Leadership',
          },
        ]}
        overlayMode="static"
        staticOverlay={{
          title: 'Who We Are',
          subtitle: 'Meet the team behind our mission.',
          ctaLabel: 'Meet the Team',
          ctaHref: '/who-we-are#team',
        }}
        height="50vh"
        align="center"
        darkOverlay
        showIndicators
      />
      
      
    </>
  )
}
