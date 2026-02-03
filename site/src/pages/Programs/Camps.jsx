import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

export default function Camps() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/programs/camp.jpg',
                        alt: 'Summer Camps at Eagle’s Cove',
                        title: 'Camps at Eagle’s Cove',
                        subtitle: 'Fun, adventure, and community in God’s creation',
                        ctaLabel: 'Contact Us',
                        ctaHref: '/contact?area=Camps',
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
                            Summer Camp at Eagle’s Cove
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Summer Camp at NorthWind’s Eagle’s Cove is a place of fun and adventure, where memories are made, and lives are impacted. Throughout the summer, volunteer teams travel to the Cove from all over North America to assist in running overnight camps for children, teens, families, and the guests from NorthWind’s Gathering.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Summer Camp at the Cove is a safe place where individuals can grow in community as they learn more about the Creator and spend time in the beautiful landscape of Northwestern Ontario.
                        </Typography>

                        <Alert severity="info" sx={{ my: 2 }}>
                            Until the COVID-19 restrictions lift regarding overnight camps we will again plan for Day Camps.
                        </Alert>

                        <Typography variant="h5" gutterBottom>
                            Family Day Camps
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Gather your family and register for a Family Day Camp where your family enjoys a day at the Cove with activities, meals, and dedicated staff to ensure your family is having great moments to bond and enjoy a great day of camp.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Check back here in June to register.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Get Involved
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Want to join a camp or volunteer with a team? Reach out and we’ll share upcoming opportunities.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Camps"
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
                                        Support Camps
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps provide safe, meaningful camp experiences for families and youth.
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
