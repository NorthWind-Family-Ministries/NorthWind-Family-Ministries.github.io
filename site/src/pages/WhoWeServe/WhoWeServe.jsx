import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'

export default function WhoWeServe() {
    const sectors = [
        { label: 'Northern Care', href: '/who-we-serve/northern-care' },
        { label: 'Street Care', href: '/who-we-serve/street-care' },
        { label: 'Community Care', href: '/who-we-serve/community-care' },
        { label: 'Personal Care', href: '/who-we-serve/personal-care' },
    ]

    return (
        <Container sx={{ py: 6 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Who We Serve
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Explore our four care sectors and how we support each.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {sectors.map((s) => (
                    <Grid item xs={12} sm={6} md={3} key={s.label}>
                        <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                {s.label}
                            </Typography>
                            <Link href={s.href} underline="hover">
                                Learn more
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
