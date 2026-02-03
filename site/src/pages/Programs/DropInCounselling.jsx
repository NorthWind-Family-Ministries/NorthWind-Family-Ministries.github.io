import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

export default function DropInCounselling() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/counselling.jpg',
                        alt: 'Drop-in Counselling',
                        title: 'Drop-in Counselling',
                        subtitle: 'Compassionate support available when you need it',
                        ctaLabel: 'Contact Us',
                        ctaHref: '/contact?area=Drop-in%20Counselling',
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
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>
                            Same-day, judgment-free support
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Drop-in Counselling provides brief, solution-focused support for individuals and families
                            seeking immediate help. Sessions are offered on a walk-in basis with trained counsellors
                            who listen, encourage, and help you take practical next steps.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Whether you’re navigating relationship challenges, stress, grief, or everyday pressures,
                            we’re here to help. Our approach is compassionate and strengths-based, rooted in Christian
                            care and respect for every person.
                        </Typography>

                        <Typography variant="h5" gutterBottom>
                            What to expect
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            - First-come, first-served single-session support
                            <br />- Focus on immediate concerns and practical next steps
                            <br />- Referrals to ongoing supports when helpful
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Have questions or want to confirm availability? Get in touch and we’ll help you find the
                            right support.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Connect With Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Reach out to ask about hours, availability, or to explore additional
                                        counselling supports.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Drop-in%20Counselling"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Contact Us
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="primary">
                                        Support Counselling
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift expands accessible, timely counselling services for individuals and
                                        families in our community.
                                    </Typography>
                                    <Button component={Link} to="/donate" variant="outlined" color="primary">
                                        Donate
                                    </Button>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
