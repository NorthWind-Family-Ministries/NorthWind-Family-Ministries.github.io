import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Hero from '../../components/Hero.jsx'
import FeatureCards from '../../components/FeatureCards.jsx'
import { useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function WhoWeServe() {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '')
            const el = document.getElementById(targetId)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }, [location.hash])
    const sectors = [
        { label: 'Northern Care', href: '/who-we-serve#northern-care', subtitle: 'Outreach and support for northern communities.' },
        { label: 'Street Care', href: '/who-we-serve#street-care', subtitle: 'Compassionate street outreach providing basic needs.' },
        { label: 'Community Care', href: '/who-we-serve#community-care', subtitle: 'Programs serving the local community and families.' },
        { label: 'Prison Care', href: '/who-we-serve#prison-care', subtitle: 'Individual counselling and life skills support.' },
    ]

    const slides = [
        {
            src: '/images/areas/counselling.jpg',
            alt: 'Who We Serve',
        },
    ]

    return (
        <>
            <Hero
                overlayMode="static"
                staticOverlay={{
                    title: 'Who We Serve',
                    subtitle: 'Explore our four care sectors and how we support each.',
                }}
                slides={slides}
                height="40vh"
                align="center"
                darkOverlay={true}
                showIndicators={false}
            />

            <Container sx={{ py: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Care Sectors
                </Typography>
                <Typography variant="body1" paragraph>
                    At North Wind Family Ministries, we are dedicated to serving diverse communities through our four specialized care sectors. Each sector is designed to address unique needs and provide comprehensive support to those we serve.
                </Typography>
                <FeatureCards
                    items={sectors.map((s) => ({
                        title: s.label,
                        subtitle: s.subtitle,
                        button: { label: 'Learn more', href: s.href },
                    }))}
                    spacing={3}
                    itemMd={3}
                    cardVariant="outlined"
                />
            </Container>

            {/* Sectors */}
            <Container id="northern-care" maxWidth={false} disableGutters sx={{ py: 6 }}>
                <Hero
                    overlayMode="static"
                    staticOverlay={{ title: 'Northern Care', subtitle: 'Outreach and support for northern communities.' }}
                    slides={[{ src: '/images/areas/counselling.jpg', alt: 'Northern Care' }]}
                    height="30vh"
                    align="left"
                    darkOverlay
                    showIndicators={false}
                />
                <Container sx={{ mt: 3 }}>
                    <p>Content coming soon. This section highlights services and support for northern communities.</p>
                </Container>
            </Container>

            <Container id="street-care" maxWidth={false} disableGutters sx={{ py: 6 }}>
                <Hero
                    overlayMode="static"
                    staticOverlay={{ title: 'Street Care', subtitle: 'Compassionate street outreach providing basic needs.' }}
                    slides={[{ src: '/images/areas/counselling.jpg', alt: 'Street Care' }]}
                    height="30vh"
                    align="left"
                    darkOverlay
                    showIndicators={false}
                />
                <Container sx={{ mt: 3 }}>
                    <p>Content coming soon. This section covers outreach and support for individuals living on the street.</p>
                </Container>
            </Container>

            <Container id="community-care" maxWidth={false} disableGutters sx={{ py: 6 }}>
                <Hero
                    overlayMode="static"
                    staticOverlay={{ title: 'Community Care', subtitle: 'Programs serving the local community and families.' }}
                    slides={[{ src: '/images/areas/counselling.jpg', alt: 'Community Care' }]}
                    height="30vh"
                    align="left"
                    darkOverlay
                    showIndicators={false}
                />
                <Container sx={{ mt: 3 }}>
                    <p>Content coming soon. This section focuses on services supporting broader community wellness.</p>
                </Container>
            </Container>

            <Container id="prison-care" maxWidth={false} disableGutters sx={{ py: 6 }}>
                <Hero
                    overlayMode="static"
                    staticOverlay={{ title: 'Prison Care', subtitle: 'Individual counselling and life skills support.' }}
                    slides={[{ src: '/images/areas/counselling.jpg', alt: 'Prison Care' }]}
                    height="30vh"
                    align="left"
                    darkOverlay
                    showIndicators={false}
                />
                <Container sx={{ mt: 3 }}>
                    <p>Content coming soon. This section highlights personalized care and support services.</p>
                </Container>
            </Container>
        </>
    )
}
