import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

export default function CookingForLife() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/lifebuild.jpg',
                    alt: 'Cooking For Life',
                    title: 'Cooking For Life',
                    subtitle: 'Hands‑on cooking and nutrition supports for families.',
                    ctaLabel: 'Ask About Cooking For Life',
                    ctaHref: '/contact?area=Cooking%20For%20Life',
                }]}
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
                            About Cooking For Life
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Cooking For Life builds kitchen confidence with practical, budget‑friendly meals,
                            basic nutrition, and family‑friendly recipes. Participants learn simple techniques,
                            meal planning, and how to make healthy food more accessible.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        What You'll Learn
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography variant="body1">• Meal planning on a budget</Typography>
                                        <Typography variant="body1">• Basic nutrition and label reading</Typography>
                                        <Typography variant="body1">• Safe food handling</Typography>
                                        <Typography variant="body1">• Family‑friendly, practical recipes</Typography>
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Programs run seasonally with flexible formats for families and groups.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Cooking%20For%20Life"
                                        variant="outlined"
                                        color="text.primary"
                                    >
                                        Ask About Cooking For Life
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Support Cooking For Life
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps provide hands‑on cooking and nutrition supports to more families.
                                    </Typography>
                                    <Button component={Link} to="/donate" variant="contained" color="primary">
                                        Donate
                                    </Button>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ pb: 4 }}>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Program Details
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Sessions are offered in small groups and community settings. Materials and ingredients are provided
                        when possible. Please reach out to discuss availability and options for your family or community.
                    </Typography>
                    <Button component={Link} to="/contact?area=Cooking%20For%20Life" variant="contained" color="primary">
                        Get Started
                    </Button>
                </Box>
            </Container>
        </>
    )
}
