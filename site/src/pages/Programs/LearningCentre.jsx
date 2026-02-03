import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import { Divider } from '@mui/material'

export default function LearningCentre() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/programs/learning-centre.jpg',
                    alt: 'The Learning Centre',
                    title: 'The Learning Centre',
                    subtitle: "Learn God’s Word and apply it to life.",
                    ctaLabel: 'Ask About Learning Centre',
                    ctaHref: '/contact?area=Learning%20Centre',
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
                            About the Learning Centre
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            The Learning Centre is for all who want to learn God’s Word and apply it to their lives. We meet people where they are in their learning journey and provide opportunities for growth. The Bible is for everyone.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We welcome those who have not learned to read or had little schooling as well as those who finished school. We welcome the elders, the youth and those in between.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Classes vary from a free four-lesson course on How to Study the Bible and a low-cost nine-week course on Walking with the Creator to apprentice-level courses from the Aboriginal Bible Academy and other sources.
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
                                        Interested in Learning Centre classes or resources? Reach out and we’ll help you find the right next step.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Learning%20Centre"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ask About Learning Centre
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Donor Thanks */}
                            <Card variant="outlined" sx={{ borderColor: 'secondary.main' }}>
                                <CardContent>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ width: 80, height: 80, display: 'flex', alignItems: 'center' }}>
                                            <img
                                                src={import.meta.env?.VITE_DAMASCUS_ROAD_RECT_LOGO_URL || '/images/sponsors/damascus-road.jpeg'}
                                                alt="Damascus Road Foundation Logo"
                                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" gutterBottom color="text.primary">
                                                Program Sponsor
                                            </Typography>
                                            <Typography variant="body1">Damascus Road Foundation</Typography>
                                        </Box>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        Thank you to the Damascus Road Foundation for supporting the Learning Centre.
                                    </Typography>
                                        <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" paragraph>
                                        Learn more about the Damascus Road Foundation and their community support.
                                    </Typography>
                                    <Button
                                        href="https://damascusroadfoundation.ca/"
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
                                        Support the Learning Centre
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps make classes accessible and resources available to learners of all ages.
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
