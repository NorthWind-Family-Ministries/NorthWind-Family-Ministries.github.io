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

export default function Retreat() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/landbased.jpg',
                        alt: "Retreats at Eagle’s Cove",
                        title: "Retreats at Eagle’s Cove",
                        subtitle: 'Rest, reflection, and community in God\'s creation',
                        ctaLabel: 'Contact Us',
                        ctaHref: '/contact?area=Retreats',
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
                            Retreats at Eagle’s Cove
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            There’s nothing like a trip the bush, enjoying a paddle on the lake, or taking in the crackle of an evening campfire. At Eagle’s Cove, surrounded by 178 acres of forest and lake, simple pleasures like these are easy to come by. Whether it’s children, students or families our facility is well suited for these events with four cabins, a cook house and 2 residences. You can even get the adrenaline flowing with paintballing. Pans of bannock and pots of moose stew cooked over the fire stir rich conversation. Canoes and kayaks allow paddlers to enjoy the lake and the archery field hits the bullseye for the marksman!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            One would say, a retreat, is good for the soul. When looking up into the stars, across the lake, or at the sunset we are often reminded that God is closer than we imagined.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Plan a Retreat
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Ready to bring your group to Eagle’s Cove? Reach out and we’ll help you plan a meaningful retreat experience.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Retreats"
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
                                        Support Retreats
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps make restorative retreat experiences accessible for children, students, and families.
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
