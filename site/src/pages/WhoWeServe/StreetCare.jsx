import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function StreetCare() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Street Care
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Content coming soon. This section covers outreach and support for individuals living on the street.
            </Typography>
        </Container>
    )
}
