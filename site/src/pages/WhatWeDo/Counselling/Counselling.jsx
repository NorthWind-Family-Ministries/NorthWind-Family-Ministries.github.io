import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import FeatureCards from '../../../components/FeatureCards'

export default function Counselling() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/counselling.jpg',
                        alt: 'Counselling',
                        title: 'Counselling',
                        subtitle:
                            'Support Whole-Life Healing for Individuals, Couples, and Families',
                        ctaLabel: 'Request an Appointment',
                        ctaHref: '/contact?area=Counselling',
                    },
                ]}
                overlayMode="per-slide"
                height="60vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />

            <Container sx={{ py: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4" gutterBottom>
                            Our Approach
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            NorthWind Counselling Services believes in whole-life healing! We seek to support individuals, couples, families and Indigenous communities through counselling, one of NorthWind’s four pillars for whole-life healing. Our graduate-degree counsellors offer professional counselling and psychotherapy. It is our desire to journey with others on their path to healing, growth and hope.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            NorthWind Counselling Services is part of NorthWind Family Ministries, which serves Thunder Bay and the greater northern Ontario region. NorthWind endeavors to build relationships and offer programs to support families wounded by trauma, broken relationships, poverty, addictions and those challenges related to mental health. NorthWind’s four program pillars include Counselling, LifeBuild (life development and skills training), Biblical Training and Land-based activities.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>   
                            We welcome each person; we honour who the Creator has made them to be and hope to empower them to grow into their full potential.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Booking Counselling
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Appointments are available Monday–Friday, with some evening options.
                                        Serving Thunder Bay and northern Ontario communities.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Counselling"
                                        variant="outlined"
                                        color="text.primary"
                                    >
                                        Request an Appointment
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Donating to Counselling
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps make Counselling services accessible to more individuals, couples, and families.
                                    </Typography>
                                    <Button component={Link} to="/donate" variant="contained" color="primary">
                                        Support Counselling
                                    </Button>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Services
                    </Typography>
                    <FeatureCards
                        spacing={3}
                        itemMd={4}
                        items={[
                            {
                                title: 'Counselling',
                                subtitle:
                                    'Professional counselling and psychotherapy for individuals, couples, and families. Support for trauma, grief, relationship challenges, and life transitions.',
                                button: {
                                    label: 'Book Counselling',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Counselling' },
                                },
                            },
                            {
                                title: 'Family Strengthening Program',
                                subtitle:
                                    'Programs that build resilience and healthy relationships in families — practical supports and guided learning to strengthen the home.',
                                button: {
                                    label: 'Ask About FSP',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Family%20Strengthening%20Program' },
                                },
                            },
                            {
                                title: 'Compass (Northern Services)',
                                subtitle:
                                    'Coordinated supports for northern and Indigenous communities, helping people access care and resources with culturally responsive pathways.',
                                button: {
                                    label: 'Connect with Compass',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Northern%20Services%20(Compass)' },
                                },
                            },
                        ]}
                    />
                </Box>
            </Container>
        </>
    )
}
