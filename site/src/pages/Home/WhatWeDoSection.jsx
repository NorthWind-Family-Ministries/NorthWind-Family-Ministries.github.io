import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'

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
            Every NorthWind program aligns to one of four areas. Explore each area to see programs and next steps that fit your journey.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
            {areas.map((area) => (
            <Grid key={area.key} item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={area.image || placeholderImage(area.title)}
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
                    to={area.key === 'counselling' ? '/what-we-do/counselling' : `/contact?area=${encodeURIComponent(area.title)}`}
                    variant="contained"
                    color="primary"
                    >
                    {area.key === 'counselling' ? 'Explore Counselling' : 'View Programs'}
                    </Button>
                    <Button component={Link} to="/donate" color="inherit">
                    Support This Work
                    </Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
            Looking for something specific? Contact us and we'll help you find the right program and next steps.
            </Typography>
        </Box>
        </Container>
    )
}
