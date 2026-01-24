import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Values() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                What We Offer
            </Typography>
            <Typography variant="body2" paragraph>
                Building a sacred place of hope and healing.
            </Typography>

            <Grid container spacing={3}>
                {[
                    { title: 'Whole Life Discipleship', subtitle: 'Growing Your Life' },
                    { title: 'Family Healing', subtitle: 'Bring health to your relationships' },
                    { title: 'A Vibrant Community', subtitle: 'Develop a sense of belonging' },
                ].map((item) => (
                    <Grid item xs={12} md={4} key={item.title}>
                        <Card variant="outlined" sx={{ textAlign: 'center', height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Box sx={{ width: 64, height: 2, bgcolor: 'error.main', mx: 'auto', my: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    {item.subtitle}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
