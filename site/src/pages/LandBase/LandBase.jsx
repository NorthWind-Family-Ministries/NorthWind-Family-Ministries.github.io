import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import FeatureCards from '../../components/FeatureCards'

export default function LandBase() {
    return (
        <>
            <Hero
                slides={[{
                    src: '../images/areas/landbased.jpg',
                    alt: 'Land Based',
                    title: 'Land Based',
                    subtitle: 'Healing and learning connected to land, culture, and community.',
                    ctaLabel: 'Get Involved',
                    ctaHref: '/contact?area=Land%20Based',
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
                            theCove
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            To hear the loons calling across the misty morning stillness of Lottit Lake (50 KM from Thunder Bay) brings a sense of peace and comfort—a nice start to a busy day at Eagle’s Cove. Before COVID-19 NorthWind held children, teen and family camps during the summer and youth retreats in the spring and fall. We trust these will happen again.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>    
                            Eagle’s Cove provides opportunities to enjoy canoeing, swimming, fishing, archery, hiking and rock climbing, a challenging game of paintball or a quiet space for conversation as they work on a craft. As winter sets in, we prepare for skating, hockey, ice fishing, and snow shoeing. The smell of campfire is in the air and someone is preparing tea for everyone. If there are elders around, you just might get a piece of bannock.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Get Connected
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    Programs run seasonally and in partnership with communities.
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Land%20Based"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ask About Land Based
                                    </Button>
                                    <Button component={Link} to="/donate" color="inherit">
                                        Support Land Based
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ py: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Programs
                </Typography>
                <FeatureCards
                    items={[
                        {
                            title: 'Camps',
                            subtitle: 'Seasonal camps for children, teens, and families at Eagle’s Cove.',
                            button: {
                                label: 'Ask About Camps',
                                variant: 'contained',
                                color: 'primary',
                                props: { component: Link, to: '/contact?area=Land%20Based&program=Camps' },
                            },
                        },
                        {
                            title: 'Retreat',
                            subtitle: 'Youth retreats in spring and fall for reflection, connection, and growth.',
                            button: {
                                label: 'Ask About Retreats',
                                variant: 'contained',
                                color: 'primary',
                                props: { component: Link, to: '/contact?area=Land%20Based&program=Retreat' },
                            },
                        },
                        {
                            title: 'Enhance',
                            subtitle: 'Skill-building on the land: canoeing, archery, crafts, and more.',
                            button: {
                                label: 'Ask About Enhance',
                                variant: 'contained',
                                color: 'primary',
                                props: { component: Link, to: '/contact?area=Land%20Based&program=Enhance' },
                            },
                        },
                    ]}
                    spacing={3}
                    itemMd={4}
                    gridContainerProps={{ alignItems: 'stretch' }}
                />
            </Container>
        </>
    )
}
