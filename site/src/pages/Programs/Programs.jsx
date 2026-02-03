import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

export default function Programs() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Programs
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Explore our programs designed to support families and strengthen our community.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>Family Strengthening Program</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        A comprehensive program focused on empowering and supporting families.
                    </Typography>
                    <Link component={RouterLink} to="/programs/fsp" underline="hover">
                        Learn more
                    </Link>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>Cooking For Life</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Practical cooking skills and nutrition education for everyday life.
                    </Typography>
                    <Link component={RouterLink} to="/programs/cooking-for-life" underline="hover">
                        Learn more
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}
