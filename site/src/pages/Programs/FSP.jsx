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
import Hero from '../../components/Hero'

export default function FSP() {
    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/counselling.jpg',
                    alt: 'Family Strengthening Program',
                    title: 'Family Strengthening Program',
                    subtitle: 'Practical supports that strengthen families and relationships.',
                    ctaLabel: 'Ask About FSP',
                    ctaHref: '/contact?area=Family%20Strengthening%20Program',
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
                            About FSP
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            The Family Strengthening Program offers guided learning and practical supports that help families build healthy relationships, resilience, and everyday skills. Programs may include parenting supports, communication and conflict tools, and pathways to strengthen the home.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Our approach is compassionate and culturally responsive, supporting families in Thunder Bay and across northern Ontario in partnership with communities and local resources.
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
                                        Interested in FSP programs or supports? Reach out and we’ll help you find the right next step.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/contact?area=Family%20Strengthening%20Program"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ask About FSP
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom color="primary">
                                        Donating to FSP
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        Your gift helps expand FSP programs and make supports accessible to more families.
                                    </Typography>
                                    <Button component={Link} to="/donate" variant="contained" color="primary">
                                        Support FSP
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
