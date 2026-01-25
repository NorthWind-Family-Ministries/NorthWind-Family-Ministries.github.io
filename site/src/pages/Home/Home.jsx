import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Hero from '../../components/Hero'
import WhatWeDoSection from './WhatWeDoSection'

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2069&auto=format&fit=crop',
            alt: 'Community gathering',
            title: 'Welcome to NorthWind Family Ministries',
            subtitle: 'Strengthening families, fostering hope, and serving our community.',
            ctaLabel: 'Donate',
            ctaHref: '/donate',
          },
          {
            src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
            alt: 'Counseling and care',
            title: 'Counseling & Care',
            subtitle: 'Compassionate support for growth, healing, and resilience.',
            ctaLabel: 'Learn More',
            ctaHref: '/about',
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
      <WhatWeDoSection />
      
    </>
  )
}
