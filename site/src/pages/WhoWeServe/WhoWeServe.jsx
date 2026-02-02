import React from 'react'
import Container from '@mui/material/Container'
import Hero from '../../components/Hero.jsx'
import FeatureCards from '../../components/FeatureCards.jsx'

export default function WhoWeServe() {
    const sectors = [
        { label: 'Northern Care', href: '/northern-care', subtitle: 'Outreach and support for northern communities.' },
        { label: 'Street Care', href: '/street-care', subtitle: 'Compassionate street outreach providing basic needs.' },
        { label: 'Community Care', href: '/community-care', subtitle: 'Programs serving the local community and families.' },
        { label: 'Personal Care', href: '/personal-care', subtitle: 'Individual counselling and life skills support.' },
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
        </>
    )
}
