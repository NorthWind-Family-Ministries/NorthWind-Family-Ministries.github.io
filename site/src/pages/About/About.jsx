import React from 'react'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

import Hero from '../../components/Hero'
import Values from './Values'
import Team from './Team'
import History from './History'

export default function About() {
    const slides = [
        {
            src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80',
            alt: 'Families supporting each other',
            title: 'About NorthWind',
            subtitle: 'Supporting families and communities with compassion and care.',
            ctaLabel: 'Donate',
            ctaHref: '/donate',
        },
        {
            src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80',
            alt: 'Community gathering',
            title: 'Our Mission',
            subtitle: 'Empower families through education and community partnerships.',
            ctaLabel: 'Get Involved',
            ctaHref: '/donate',
        },
    ]
    const teamSlides = [
        {

            
            src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Group photo of the team',
            title: 'Our Team',
            subtitle: 'Dedicated people serving with experience and heart.',
        },
        {
            src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80',
            alt: 'CEO and Founder portrait',
            title: 'Founder & CEO',
            subtitle: 'Leading with vision and compassion.',
        },
    ]

    return (
        <>
        <Hero
            slides={slides}
            overlayMode="per-slide"
            height="60vh"
            align="center"
            darkOverlay
            showIndicators
        />
        <Container sx={{ py: 4 }}>
            <Divider sx={{ my: 4 }} />
            <Values />
            <Divider sx={{ my: 4 }} />
        </Container>

        <Hero
            slides={teamSlides}
            overlayMode="per-slide"
            height="50vh"
            align="center"
            darkOverlay
            showIndicators
        />

        <Container sx={{ py: 4 }}>
            <Team />
            <Divider sx={{ my: 4 }} />
            <History />
        </Container>
        </>
    )
}
