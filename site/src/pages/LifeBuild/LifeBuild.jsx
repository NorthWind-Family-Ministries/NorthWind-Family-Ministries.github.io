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
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

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
                            Our Approach
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            LifeBuild helps families thrive with skills‑based supports for everyday life —
                            parenting, financial literacy, employment readiness, and healthy relationships.
                            Care is strengths‑based, culturally responsive, and delivered in community.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                            <Chip label="Parenting supports" />
                            <Chip label="Financial literacy" />
                            <Chip label="Employment readiness" />
                            <Chip label="Healthy relationships" />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
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
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                    <Button
                                        component={Link}
                                        to="/contact?area=LifeBuild"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ask About LifeBuild
                                    </Button>
                                    <Button component={Link} to="/donate" color="inherit">
                                        Support LifeBuild
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
