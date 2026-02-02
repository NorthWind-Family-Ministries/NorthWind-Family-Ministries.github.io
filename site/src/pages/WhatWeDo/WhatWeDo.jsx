import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Hero from '../../components/Hero'
import WhatWeDoSection from '../Home/WhatWeDoSection'

export default function WhatWeDo() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/spiritual-growth.jpg',
                    alt: 'What We Do',
                    title: 'What We Do',
                    subtitle: 'Explore our four pillars and programs.',
                    ctaLabel: 'Contact Us',
                    ctaHref: '/contact',
                }]}
                overlayMode="per-slide"
                height="60vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />

            <Container sx={{ py: 4 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Explore Our Pillars
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Every NorthWind program aligns to one of four pillars. Start here to find supports that fit your journey.
                    </Typography>
                </Box>

                <WhatWeDoSection />
            </Container>
        </>
    )
}
