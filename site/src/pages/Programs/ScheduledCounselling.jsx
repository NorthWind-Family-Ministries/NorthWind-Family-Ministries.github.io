import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import { Link, useLocation } from 'react-router-dom'
import Hero from '../../components/Hero'

export default function ScheduledCounselling() {
    const { hash } = useLocation()

    React.useEffect(() => {
        if (!hash) return
        const id = decodeURIComponent(hash.replace('#', ''))
        const scrollToTarget = () => {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        // Try immediately, next frame, and after a short delay to account for layout/images
        scrollToTarget()
        const raf = requestAnimationFrame(scrollToTarget)
        const t = setTimeout(scrollToTarget, 300)
        return () => {
            cancelAnimationFrame(raf)
            clearTimeout(t)
        }
    }, [hash])

    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/counselling.jpg',
                        alt: 'Scheduled Counselling',
                        title: 'Scheduled Counselling',
                        subtitle: 'Book individual, family, or couples sessions',
                        ctaLabel: 'Request an Appointment',
                        ctaHref: '/contact?area=Scheduled%20Counselling',
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
                            Book Counselling That Fits Your Needs
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Our graduate-degree counsellors offer professional counselling and psychotherapy for
                            individuals, couples, and families. Together we focus on healing, growth, and practical
                            next steps—rooted in compassionate care and respect for every person.
                        </Typography>

                        <Box sx={{ my: 2 }}>
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                <Chip component={Link} clickable to="#individual" label="Individual Counselling" variant="outlined" />
                                <Chip component={Link} clickable to="#family" label="Family Counselling" variant="outlined" />
                                <Chip component={Link} clickable to="#couples" label="Couples Counselling" variant="outlined" />
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                            <Button
                                component={Link}
                                to="/contact?area=Scheduled%20Counselling"
                                variant="contained"
                                color="primary"
                            >
                                Request an Appointment
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Connect With Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Have questions about availability, fees, or which type of counselling is right
                                        for you? We’re here to help.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Scheduled%20Counselling"
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
                                        Your gift helps expand access to professional counselling for individuals,
                                        couples, and families in our community.
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

            {/* Individual Section (full width hero) */}
            <Box id="individual" sx={{ scrollMarginTop: 96 }}>
                <Hero
                    slides={[{
                        src: '/images/areas/counselling.jpg',
                        alt: 'Individual Counselling',
                        title: 'Individual Counselling',
                        subtitle: 'Personalized one-on-one support',
                        ctaLabel: 'Book Individual Session',
                        ctaHref: '/contact?area=Counselling%20-%20Individual',
                    }]}
                    height="40vh"
                    align="center"
                    darkOverlay
                    showIndicators={false}
                />
            </Box>
            <Container sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Individual Counselling
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    One-on-one counselling for personal challenges such as stress, anxiety, grief, trauma,
                    identity, and life transitions. We work collaboratively to build skills and move toward
                    whole-life healing.
                </Typography>
            </Container>

            {/* Family Section (full width hero) */}
            <Box id="family" sx={{ scrollMarginTop: 96 }}>
                <Hero
                    slides={[{
                        src: '/images/areas/counselling.jpg',
                        alt: 'Family Counselling',
                        title: 'Family Counselling',
                        subtitle: 'Strengthen relationships and resilience',
                        ctaLabel: 'Book Family Session',
                        ctaHref: '/contact?area=Counselling%20-%20Family',
                    }]}
                    height="40vh"
                    align="center"
                    darkOverlay
                    showIndicators={false}
                />
            </Box>
            <Container sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Family Counselling
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Support for families to strengthen relationships, communication, and resilience.
                    Sessions focus on practical tools and shared understanding to help the whole household
                    thrive.
                </Typography>
            </Container>

            {/* Couples Section (full width hero) */}
            <Box id="couples" sx={{ scrollMarginTop: 96 }}>
                <Hero
                    slides={[{
                        src: '/images/areas/counselling.jpg',
                        alt: 'Couples Counselling',
                        title: 'Couples Counselling',
                        subtitle: 'Invest in your relationship',
                        ctaLabel: 'Book Couples Session',
                        ctaHref: '/contact?area=Counselling%20-%20Couples',
                    }]}
                    height="40vh"
                    align="center"
                    darkOverlay
                    showIndicators={false}
                />
            </Box>
            <Container sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Couples Counselling
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Counselling for couples at any stage—building trust, resolving conflict, navigating
                    change, and investing in a healthy, hope-filled future together.
                </Typography>
            </Container>
        </>
    )
}
