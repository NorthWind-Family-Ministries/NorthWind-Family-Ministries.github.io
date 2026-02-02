import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import FeatureCards from '../../../components/FeatureCards'

export default function LifeBuild() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/lifebuild.jpg',
                    alt: 'LifeBuild',
                    title: 'LifeBuild',
                    subtitle: 'Practical supports and guided learning for everyday life.',
                    ctaLabel: 'Get Started',
                    ctaHref: '/contact?area=LifeBuild',
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
                            About LifeBuild
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            LifeBuild helps families thrive with skills‑based supports for everyday life —
                            parenting, financial literacy, employment readiness, and healthy relationships.
                            Care is strengths‑based, culturally responsive, and delivered in community.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Programs
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography variant="body1">• Parenting workshops & coaching</Typography>
                                        <Typography variant="body1">• Budgeting & financial skills</Typography>
                                        <Typography variant="body1">• Job readiness & employment supports</Typography>
                                        <Typography variant="body1">• Healthy relationships & communication</Typography>
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Programs are offered throughout the year with flexible formats.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=LifeBuild"
                                        variant="outlined"
                                        color="text.primary"
                                    >
                                        Ask About LifeBuild
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Donating to LifeBuild
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps make LifeBuild programs accessible to more families and communities.
                                    </Typography>
                                    <Button component={Link} to="/donate" variant="contained" color="primary">
                                        Support LifeBuild
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
                        Programs
                    </Typography>
                    <FeatureCards
                        spacing={3}
                        itemMd={6}
                        items={[
                            {
                                title: 'LifeBuild — Series',
                                subtitle:
                                    'Multi‑week, skills‑based learning to strengthen everyday life: parenting, budgeting, job readiness, and healthy relationships.',
                                button: {
                                    label: 'Ask About LifeBuild Series',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=LifeBuild%20-%20Series' },
                                },
                            },
                            {
                                title: 'Cooking For Life',
                                subtitle:
                                    'Hands‑on cooking and nutrition supports for families — practical, budget‑friendly meals and kitchen confidence.',
                                button: {
                                    label: 'Learn About Cooking For Life',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/lifebuild/cooking-for-life' },
                                },
                            },
                        ]}
                    />
                </Box>
            </Container>
        </>
    )
}
