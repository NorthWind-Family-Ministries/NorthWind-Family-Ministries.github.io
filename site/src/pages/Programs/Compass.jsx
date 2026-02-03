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

export default function Compass() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/counselling.jpg',
                    alt: 'Compass – Northern Response Team',
                    title: 'Compass',
                    subtitle: 'Northern Response Team: Supporting communities after crisis.',
                    ctaLabel: 'Ask About Compass',
                    ctaHref: '/contact?area=Compass',
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
                            Compass
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Northern Response Team - Joining a community in re-stabilizing after trauma.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Sadly, it’s a familiar headline to see chief declares his/her community in state of crisis. Frontline workers are too few to address the many concerns when a community experiences a crisis. How does a community begin to re-stabilize after a suicide epidemic? Community leadership desire to lead their communities to better health, but family members’ coping strategies are depleted.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            When invited into a community this team provides professional counselling, mental health training, LifeBuild workshops for the communities, youth and children’s programs with the focus of caring for the mental health concerns of different age groups. This team commits to going to a community three to five separate times for five to seven days at a time to encourage learning, support for local mental health workers, provide recovery workshops for family members, etc.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            The support of NorthWind Compass team is six weeks to six months after a crisis. The children and youth workers seek to re-establish normalcy through play-therapy, art, games and activities. LifeBuild coaches offer workshops with interactive activities that promote holistic health. A Counsellor/Psychotherapist trained in Post-Traumatic Stress disorder and crisis recovery supports family members and local mental health workers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Get Connected
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Interested in inviting Compass to your community or learning more? Reach out and our team will follow up.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Compass"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ask About Compass
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Support Compass
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps bring crisis recovery supports and workshops to communities when they need them most.
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
        </>
    )
}
