import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Hero from '../components/Hero'

export default function Donate() {
    return (
        <>
        <Hero
            slides={[
                {
                    src: 'https://images.unsplash.com/photo-1516321165247-4aa89a3a2d79?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Hands holding a heart',
                },
                {
                    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Community support',
                },
                {
                    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Helping hands',
                },
            ]}
            overlayMode="static"
            staticOverlay={{
                title: 'Make a Difference Today',
                subtitle: 'Your generosity strengthens families and fosters hope.',
            }}
            height="50vh"
            align="center"
            darkOverlay
        />
        {/* Region selector section */}
        <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
            Where are you donating from?
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', mb: 4 }}>
            <Button component="a" href="#donate-canada" variant="contained" color="primary">
            Canadian Donations
            </Button>
            <Button component="a" href="#donate-usa" variant="outlined" color="primary">
            USA Donations
            </Button>
        </Stack>

        {/* Existing content */}
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

        {/* Target sections */}
        <Container sx={{ py: 4 }}>
        <Box id="donate-canada" sx={{ scrollMarginTop: 80, mb: 6 }}>
            <Typography variant="h5" gutterBottom>
            Canadian Donations
            </Typography>
            <Typography variant="body1" paragraph>
            If you are donating from Canada, please use the Canadian donation options below.
            Detailed instructions or a secure form can be added here.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" disabled>
                Give Online (Canada) — Coming Soon
            </Button>
            <Button variant="outlined" color="primary" href="/about">
                Learn More
            </Button>
            </Stack>
        </Box>

        <Box id="donate-usa" sx={{ scrollMarginTop: 80 }}>
            <Typography variant="h5" gutterBottom>
            USA Donations
            </Typography>
            <Typography variant="body1" paragraph>
            If you are donating from the USA, please use the USA donation options below.
            Detailed instructions or a secure form can be added here.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" disabled>
                Give Online (USA) — Coming Soon
            </Button>
            <Button variant="outlined" color="primary" href="/about">
                Learn More
            </Button>
            </Stack>
        </Box>
        </Container>
        </>
    )
}
