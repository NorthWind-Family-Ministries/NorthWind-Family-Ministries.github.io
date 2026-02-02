import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function NorthernCare() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Northern Care
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Content coming soon. This section highlights services and support for northern communities.
            </Typography>
        </Container>
    )
}
