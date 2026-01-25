import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center', bgcolor: 'background.paper', position: 'relative' }}>
            <Typography variant="caption">© {new Date().getFullYear()} NorthWind Family Ministries</Typography>
            <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
                <Link component={RouterLink} to="/privacy" variant="caption" underline="hover" color="text.secondary">
                    Privacy Policy
                </Link>
            </Box>
        </Box>
    )
}
