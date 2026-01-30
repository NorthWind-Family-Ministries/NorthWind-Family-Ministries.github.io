import React, { useEffect } from 'react'
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
    useEffect(() => {
        if (!window._ctct_m) {
            window._ctct_m = 'de356aae2018565e1be23a9b967ae4d4'
        }
        if (!document.getElementById('ctct-signup-script')) {
            const s = document.createElement('script')
            s.id = 'ctct-signup-script'
            s.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js'
            s.async = true
            s.defer = true
            document.body.appendChild(s)
        }
    }, [])
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

                            {/* Program Sponsors */}
                            <Card variant="outlined" sx={{ borderColor: 'secondary.main' }}>
                                <CardContent>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ width: 80, height: 80, display: 'flex', alignItems: 'center' }}>
                                            <img
                                                src={import.meta.env?.VITE_PATERSON_LOGO_URL || '/images/sponsors/paterson.jpg'}
                                                alt="Paterson Foundation Logo"
                                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" gutterBottom color="text.primary">
                                                Program Sponsor
                                            </Typography>
                                            <Typography variant="body1">Paterson Foundation</Typography>
                                        </Box>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        Thank you to the Paterson Foundation for supporting Cooking For Life.
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" paragraph>
                                        Learn more about the Paterson Foundation and their community support.
                                    </Typography>
                                    <Button
                                        href="https://patersonfoundation.ca/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Learn More
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
                {/* Next Step section with Hero and description + form in card */}
                <Box sx={{ mt: 6 }}>
                    <Hero
                        slides={[{ src: '/images/areas/lifebuild.jpg', alt: 'Cooking For Life - Next Step' }]}
                        overlayMode="static"
                        staticOverlay={{ title: 'In‑Person: Next Step', subtitle: 'Hands‑on sessions at Next Step.' }}
                        height="40vh"
                        align="left"
                        darkOverlay
                        showIndicators={false}
                    />
                    <Container sx={{ mt: 3 }}>
                        <Grid container spacing={3} alignItems="stretch">
                            <Grid item xs={12} md={7}>
                                <Typography variant="h5" gutterBottom>
                                    In‑Person: Next Step
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Practice skills together in a welcoming kitchen space. Learn safe food handling, label reading,
                                    and practical recipes with facilitators on hand to guide you.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ideal for small groups and families wanting hands‑on experience.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Card variant="outlined" sx={{ height: '100%' }}>
                                    <CardContent>
                                        {import.meta.env?.VITE_CTCT_LIFEBUILD_NEXTSTEP_FORM_ID ? (
                                            <div
                                                className="ctct-inline-form"
                                                data-form-id={import.meta.env.VITE_CTCT_LIFEBUILD_NEXTSTEP_FORM_ID}
                                            />
                                        ) : (
                                            <Button component={Link} to="/contact?area=Cooking%20For%20Life%20Next%20Step" variant="contained" color="primary">
                                                Contact Us
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                {/* Online Program section with Hero and description + form in card */}
                <Box sx={{ mt: 6 }}>
                    <Hero
                        slides={[{ src: '/images/areas/lifebuild.jpg', alt: 'Cooking For Life - Online' }]}
                        overlayMode="static"
                        staticOverlay={{ title: 'Online', subtitle: 'Flexible, guided sessions from home.' }}
                        height="40vh"
                        align="left"
                        darkOverlay
                        showIndicators={false}
                    />
                    <Container sx={{ mt: 3 }}>
                        <Grid container spacing={3} alignItems="stretch">
                            <Grid item xs={12} md={7}>
                                <Typography variant="h5" gutterBottom>
                                    Online Classes
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Join Cooking For Life from home with live, interactive support. Build kitchen confidence
                                    through budget‑friendly meal planning, basic nutrition, and practical recipes you can make
                                    with common ingredients.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Great for families looking for flexible scheduling and step‑by‑step guidance.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Card variant="outlined" sx={{ height: '100%' }}>
                                    <CardContent>
                                        {import.meta.env?.VITE_CTCT_LIFEBUILD_ONLINE_FORM_ID ? (
                                            <div
                                                className="ctct-inline-form"
                                                data-form-id={import.meta.env.VITE_CTCT_LIFEBUILD_ONLINE_FORM_ID}
                                            />
                                        ) : (
                                            <Button component={Link} to="/contact?area=Cooking%20For%20Life%20Online" variant="contained" color="primary">
                                                Contact Us
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Redwood Foodbank section with Hero and description + form in card */}
                <Box sx={{ mt: 6 }}>
                    <Hero
                        slides={[{ src: '/images/areas/lifebuild.jpg', alt: 'Cooking For Life - Redwood Foodbank' }]}
                        overlayMode="static"
                        staticOverlay={{ title: 'In‑Person: Redwood Foodbank (Paused)', subtitle: 'Sign up to be notified when sessions resume.' }}
                        height="40vh"
                        align="left"
                        darkOverlay
                        showIndicators={false}
                    />
                    <Container sx={{ mt: 3 }}>
                        <Grid container spacing={3} alignItems="stretch">
                            <Grid item xs={12} md={7}>
                                <Typography variant="h5" gutterBottom>
                                    In‑Person: Redwood Foodbank (Paused)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Short, practical classes offered alongside food bank hours, focusing on quick, budget‑friendly meals
                                    and nutrition basics with available ingredients. Sessions are currently paused.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Add your name to be notified when the program resumes.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Card variant="outlined" sx={{ height: '100%' }}>
                                    <CardContent>
                                        {import.meta.env?.VITE_CTCT_LIFEBUILD_REDFOODBANK_FORM_ID ? (
                                            <div
                                                className="ctct-inline-form"
                                                data-form-id={import.meta.env.VITE_CTCT_LIFEBUILD_REDFOODBANK_FORM_ID}
                                            />
                                        ) : (
                                            <Button component={Link} to="/contact?area=Cooking%20For%20Life%20Redwood%20Foodbank" variant="contained" color="primary">
                                                Contact Us
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
        </>
    )
}
