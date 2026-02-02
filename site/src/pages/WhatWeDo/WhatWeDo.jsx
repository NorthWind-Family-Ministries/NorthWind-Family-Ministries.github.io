import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ConstantContactFormCard from '../../components/ConstantContactFormCard'
import Hero from '../../components/Hero'
import WhatWeDoSection from '../Home/WhatWeDoSection'

export default function WhatWeDo() {
    const slides = [{
        src: '/images/areas/spiritual-growth.jpg',
        alt: 'What We Do',
        title: 'What We Do',
        subtitle: 'Explore our four pillars and programs.',
        ctaLabel: 'Contact Us',
        ctaHref: '/contact',
    }]
    
    // Load Constant Contact signup widget once
    useEffect(() => {
        if (!window._ctct_m) {
            window._ctct_m = 'de356aae2018565e1be23a9b967ae4d4'
        }
        if (!document.getElementById('ctct-signup-script')) {
            const s = document.createElement('script')
            s.id = 'ctct-signup-script'
            s.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js'
            s.async = true
            s.defer = true
            document.body.appendChild(s)
        }
    }, [])
    return (
        <>
            <Hero
                slides={slides}
                overlayMode="per-slide"
                height="60vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />

            <WhatWeDoSection />

            {/* Why we do it Hero*/}
            <Hero
                slides={[{
                    src: '/images/areas/spiritual-growth.jpg',
                    alt: 'Why We Do It',
                    title: 'Why We Do It',
                    subtitle: 'Our mission is to provide holistic care and support to those in need, fostering healing and growth through our dedicated programs and services.',
                    ctaLabel: 'Learn More',
                    ctaHref: '/who-we-are#mission',
                }]}
                overlayMode="per-slide"
                height="40vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />
            

            {/* See the impact (subscribe to our newsletter) */}
            <Typography variant="h4" align="center" gutterBottom sx={{ mt: 6 }}>
                See the Impact
            </Typography>
            <Container sx={{ mb: 6 }}>
                <Grid container spacing={3} alignItems="stretch">
                    <Grid item xs={12} md={8}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Box sx={{ width: '100%', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider', mb: 2 }}>
                                    <img
                                        src="/images/areas/spiritual-growth.jpg"
                                        alt="Participant story"
                                        style={{ width: '100%', display: 'block' }}
                                    />
                                </Box>
                                <Typography variant="h5" gutterBottom>
                                    A Participant's Story
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    "Before joining, I struggled to find the confidence and skills I needed. Through the program, I learned practical steps and felt supported every week. Today, I'm cooking meals for my family and budgeting smarter."
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Shared with permission. Names and details may be changed to protect privacy.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ConstantContactFormCard formId={import.meta.env?.VITE_CTCT_NEWSLETTER_FORM_ID} />
                    </Grid>
                </Grid>
            </Container>

            {/* Get involved moved to Footer */}
        </>
    )
}
