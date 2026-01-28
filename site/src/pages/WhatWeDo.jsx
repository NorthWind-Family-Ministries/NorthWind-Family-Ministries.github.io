import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const areas = [
    {
        key: 'counselling',
        title: 'Counselling',
        description:
            'Professional counselling and psychotherapy for individuals, couples, and families — compassionate, trauma‑informed care for seasons of change, grief, and growth.',
        image: '/images/areas/counselling.jpg',
        href: '/what-we-do/counselling',
    },
    {
        key: 'lifebuild',
        title: 'LifeBuild',
        description:
            'Practical supports and guided learning for everyday life — parenting, financial skills, employment readiness, and healthy relationships to help families thrive.',
        image: '/images/areas/lifebuild.jpg',
        href: '/what-we-do/lifebuild',
    },
    {
        key: 'land-based',
        title: 'Land Based',
        description:
            'Healing and learning connected to land, culture, and community — activities that honor tradition, build belonging, and strengthen identity.',
        image: '/images/areas/landbased.jpg',
        href: '/contact?area=Land%20Based',
    },
    {
        key: 'spiritual-growth',
        title: 'Spiritual Growth',
        description:
            'Faith‑formed care, mentorship, and spaces to explore hope and meaning — opportunities for prayer, learning, and spiritual companionship.',
        image: '/images/areas/spiritual-growth.jpg',
        href: '/contact?area=Spiritual%20Growth',
    },
]

export default function WhatWeDo() {
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h3" gutterBottom>
                What We Do
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                NorthWind serves through four program areas. Explore each to learn what we offer and how to get started.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
                {areas.map((area) => (
                    <Grid key={area.key} item xs={12} md={6}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={area.image}
                                alt={`${area.title} banner`}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {area.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {area.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button
                                    component={Link}
                                    to={area.href}
                                    variant="contained"
                                    color="primary"
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
