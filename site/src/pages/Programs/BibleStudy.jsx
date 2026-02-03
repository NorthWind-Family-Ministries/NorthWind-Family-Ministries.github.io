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

export default function BibleStudy() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/spiritual-growth.jpg',
                        alt: 'Bible Study',
                        title: 'Bible Study',
                        subtitle: 'Join us for a time of study',
                        ctaLabel: 'Contact Us',
                        ctaHref: '/contact?area=Bible%20Study',
                    },
                ]}
                overlayMode="per-slide"
                height="50vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />

            <Container sx={{ py: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>
                            About the Study
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We want the study of God’s Word to be relevant for our participants. We, as leaders, are studying Indigenous culture and learning styles with the desire to share God’s Word in ways that are especially meaningful for our Indigenous friends. We all understand better when concepts are presented according to the way we think.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Join us for a time of study.
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
                                        Interested in joining or learning more? Reach out and we’ll share details about upcoming sessions.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Bible%20Study"
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
                                        Support Spiritual Growth
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps make studies and discipleship resources accessible to our community.
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
