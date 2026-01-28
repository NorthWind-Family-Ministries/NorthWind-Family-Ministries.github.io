import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import FeatureCards from '../../components/FeatureCards'

const areas = [
    {
        key: 'counselling',
        title: 'Counselling',
        description:
        'Compassionate, trauma‑informed support for individuals, couples, and families. We walk alongside people through seasons of change, grief, and growth.',
        image: '../../images/areas/counselling.jpg',
    },
    {
        key: 'lifebuild',
        title: 'LifeBuild',
        description:
        'Practical skills and supports for everyday life: parenting, financial literacy, employment readiness, and healthy relationships to help families thrive.',
        image: '../../images/areas/lifebuild.jpg',
    },
    {
        key: 'land-based',
        title: 'Land Based',
        description:
        'Healing and learning connected to land, culture, and community. Activities that honor tradition, build belonging, and strengthen identity.',
        image: '../../images/areas/landbased.jpg',
    },
    {
        key: 'spiritual-growth',
        title: 'Spiritual Growth',
        description:
        'Faith‑formed care, mentorship, and spaces to explore hope and meaning. Opportunities for prayer, learning, and spiritual companionship.',
        image: '/images/areas/spiritual-growth.jpg',
    },
]

export default function WhatWeDoSection() {
    return (
        <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            What We Do
        </Typography>
        <Typography variant="body1" paragraph>
            Every NorthWind program aligns to one of four pillars. Explore each pillar to see programs and next steps that fit your journey.
        </Typography>

        <FeatureCards
            spacing={3}
            itemMd={6}
            gridContainerProps={{ sx: { mt: 1 } }}
            items={areas.map((area) => ({
                title: area.title,
                subtitle: area.description,
                button: {
                    label:
                        area.key === 'counselling'
                            ? 'Explore Counselling'
                            : area.key === 'land-based'
                            ? 'Explore Land Based'
                            : 'View Programs',
                    variant: 'contained',
                    color: 'primary',
                    props: {
                        component: Link,
                        to:
                            area.key === 'counselling'
                                ? '/counselling'
                                : area.key === 'land-based'
                                ? '/landbase'
                                : `/contact?area=${encodeURIComponent(area.title)}`,
                    },
                },
            }))}
        />

        <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
            Looking for something specific? Contact us and we'll help you find the right program and next steps.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
                component={Link}
                to="/contact"
            >
                Contact Us
            </Button>
        </Box>
        </Container>
    )
}
