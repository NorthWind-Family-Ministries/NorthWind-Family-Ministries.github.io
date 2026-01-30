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
import MuiLink from '@mui/material/Link'
import Alert from '@mui/material/Alert'
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
                    src: '/images/areas/c4l.jpg',
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
                        <Box sx={{ mt: 2 }}>
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
                            <Typography variant="h5" gutterBottom>
                                How to Participate
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                There are three ways to participate in Cooking For Life:
                            </Typography>
                            <Stack spacing={1} sx={{ mb: 2 }}>
                                <Typography variant="body1">• <MuiLink href="#next-step" underline="hover">Next Steps</MuiLink>: In‑person sessions at our Program Facilities</Typography>                              
                                <Typography variant="body1">• <MuiLink href="#online" underline="hover">Online</MuiLink>: Live via Zoom</Typography>
                                <Typography variant="body1">• <MuiLink href="#redwood" underline="hover">Redwood Foodbank</MuiLink>: Paused, join waitlist</Typography>
                            </Stack>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Meet the Team
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Button component={Link} to="/about#team-jasmin-maki-maunus" variant="outlined" size="small">Jasmin Maki-Maunus</Button>
                                <Button component={Link} to="/about#team-demerai-meekis" variant="outlined" size="small">Demerai Meekis (previous)</Button>
                            </Stack>
                            <Divider sx={{ my: 3 }} />
                            <Typography variant="h5" gutterBottom>
                                Explore Our Recipe Book
                            </Typography>
                            <Card variant="outlined">
                                <CardContent>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ width: '100%', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
                                                <img
                                                    src="/images/areas/mealie.png"
                                                    alt="NorthWind Online Recipe Book (Mealie)"
                                                    style={{ width: '100%', display: 'block' }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h6" gutterBottom>
                                                Cook Along With Us
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" paragraph>
                                                Browse family‑friendly recipes, meal plans, and collections powered by Mealie. Find step‑by‑step instructions and practical tips for every skill level.
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Button
                                                    href="https://cooking.northwindfm.org"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Open Recipe Book
                                                </Button>
                                            </Stack>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                Or visit: <MuiLink href="https://cooking.northwindfm.org" target="_blank" rel="noopener noreferrer">cooking.northwindfm.org</MuiLink>
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                                                Powered by <MuiLink href="https://mealie.io/" target="_blank" rel="noopener noreferrer" color="inherit">Mealie.io</MuiLink>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2}>
                            {/* Upcoming Classes */}
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Upcoming Classes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Class types and times:
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 2 }}>
                                        <Typography variant="body1">• <MuiLink href="#next-step" underline="hover">Next Steps</MuiLink>: Wednesdays 3:00–4:30 PM</Typography>
                                        <Typography variant="body1">• <MuiLink href="#online" underline="hover">Online</MuiLink>: Fridays 10:00–11:30 AM</Typography>
                                        <Typography variant="body1">• <MuiLink href="#redwood" underline="hover">Redwood</MuiLink>: Paused, times TBA</Typography>
                                    </Stack>
                                    {/* Note to click class link for more details */}
                                    <Typography variant="body2" color="text.secondary">
                                        Click on a class type to learn more and sign up.
                                    </Typography>
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
            {/* Next Step section with Hero and description + form in card */}
            <Box id="next-step" sx={{ mt: 6 }}>
                <Hero
                    slides={[{ src: '/images/areas/c4l.jpg', alt: 'Cooking For Life - Next Step' }]}
                    overlayMode="static"
                    staticOverlay={{ title: 'At Next Steps', subtitle: 'In-person sessions' }}
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
            <Box id="online" sx={{ mt: 6 }}>
                <Hero
                    slides={[{ src: '/images/areas/c4l.jpg', alt: 'Cooking For Life - Online' }]}
                    overlayMode="static"
                    staticOverlay={{ title: 'At Home', subtitle: 'Online via Zoom' }}
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
            <Box id="redwood" sx={{ mt: 6 }}>
                <Hero
                    slides={[{ src: '/images/areas/c4l.jpg', alt: 'Cooking For Life - Redwood Foodbank' }]}
                    overlayMode="static"
                    staticOverlay={{ title: 'At Redwood Foodbank', subtitle: 'In-person sessions' }}
                    height="40vh"
                    align="left"
                    darkOverlay
                    showIndicators={false}
                />
                <Alert severity="warning" variant="filled" sx={{ textAlign: 'center' }}>
                        These classes are temporarily paused — sign up for updates below.
                    </Alert>
                <Container sx={{ mt: 3 }}>
                    <Grid container spacing={3} alignItems="stretch">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h5" gutterBottom>
                                In‑Person: Redwood Foodbank
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
