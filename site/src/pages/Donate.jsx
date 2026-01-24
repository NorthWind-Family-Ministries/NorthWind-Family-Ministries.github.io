import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function Donate() {
    return (
        <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Donate
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
            Your support helps NorthWind Family Ministries continue serving families and our community.
            We’ll soon add secure online giving options here. In the meantime, you can explore ways
            to give or learn more about our mission.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" disabled>
            Give Online (Coming Soon)
            </Button>
            <Button variant="outlined" color="primary" href="/about">
            Ways to Give & About
            </Button>
        </Stack>

        <Box sx={{ mt: 4 }}>
            <Typography variant="caption" color="text.secondary">
            Thank you for your generosity.
            </Typography>
        </Box>
        </Container>
    )
}
