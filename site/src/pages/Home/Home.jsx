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
          ctaHref: '/about#team',
        }}
        height="50vh"
        align="center"
        darkOverlay
        showIndicators
      />
      
      
    </>
  )
}
