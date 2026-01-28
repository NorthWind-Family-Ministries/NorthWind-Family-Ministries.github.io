import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'

export default function SpiritualGrowth() {
    return (
        <>
            <Hero
                slides={[
                    {
                        src: '/images/areas/spiritual-growth.jpg',
                        alt: 'Spiritual Growth',
                        title: 'Spiritual Growth',
                        subtitle:
                            'Biblical Training and Discipleship for Whole-Life Growth',
                        ctaLabel: 'Learn More',
                        ctaHref: '/contact?area=Spiritual%20Growth',
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
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4" gutterBottom>
                            Our Approach
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Spiritual Growth at NorthWind focuses on Biblical training, discipleship, and community practices that nurture whole-life transformation. Rooted in faith and guided by the wisdom of Scripture, our programs invite people to grow in character, hope, and purpose.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We partner with local churches, Indigenous communities, and mentors to offer accessible pathways for learning and growth. Through teaching, small groups, mentorship, and retreats, we aim to support people on their journey with the Creator.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Get Connected
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    Interested in courses, discipleship groups, or retreats? Reach out and we’ll help you find the right next step.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Spiritual%20Growth"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Contact Us
                                    </Button>
                                    <Button component={Link} to="/donate" color="inherit">
                                        Support Spiritual Growth
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Programs & Pathways
                    </Typography>
                    <FeatureCards
                        spacing={3}
                        itemMd={6}
                        items={[
                            {
                                title: 'The Learning Centre',
                                subtitle:
                                    'Accessible courses, mentoring, and practical resources to grow in faith and life.',
                                button: {
                                    label: 'Ask About Learning Centre',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=The%20Learning%20Centre' },
                                },
                            },
                            {
                                title: 'Gathering',
                                subtitle:
                                    'Community worship, teaching, and shared practices that nurture belonging and hope.',
                                button: {
                                    label: 'Join a Gathering',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Gathering' },
                                },
                            },
                            {
                                title: 'Bible Studies',
                                subtitle:
                                    'Scripture-based learning and discussion to grow understanding and faith.',
                                button: {
                                    label: 'Join a Study',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Bible%20Studies' },
                                },
                            },
                            {
                                title: 'Outreach',
                                subtitle:
                                    'Community engagement and service opportunities that put faith into action.',
                                button: {
                                    label: 'Get Involved',
                                    variant: 'outlined',
                                    props: { component: Link, to: '/contact?area=Outreach' },
                                },
                            },
                        ]}
                    />
                </Box>
            </Container>
        </>
    )
}
