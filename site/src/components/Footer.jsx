import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
            <Typography variant="caption">© {new Date().getFullYear()} NorthWind Family Ministries</Typography>
        </Box>
    )
}
