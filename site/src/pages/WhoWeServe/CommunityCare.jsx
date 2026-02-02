import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function CommunityCare() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Community Care
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Content coming soon. This section focuses on services supporting broader community wellness.
            </Typography>
        </Container>
    )
}
