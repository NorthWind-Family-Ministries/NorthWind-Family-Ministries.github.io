import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import routes from '../routes'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

export default function Footer() {
    // Update these with your three real locations
    const locations = [
        { label: 'Counselling Facility', lines: ['Primary Mailing Address', '141 May Street South', 'Thunder Bay, Ontario', 'P7E 1A9'] },
        { label: 'Programs Facility', lines: ['138 May Street South', 'Thunder Bay, Ontario', 'P7E 1B3'] },
        { label: 'theCove (Land-based Facility)', lines: ['235 Warnica Lake West Road', 'Gorham, Ontario', 'P7G 0Y3'] },
    ]
    return (
        <Box component="footer" sx={{ mt: 'auto', pt: 3, bgcolor: 'background.paper', borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
            {/* Top grid: logo left, sitemap right, centered */}
            <Container sx={{ px: { xs: 2, md: 3 } }}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Link component={RouterLink} to="/" aria-label="Home" sx={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                                    <img src="/NFM-Logo.png" alt="NorthWind Family Ministries wordmark logo" height="80" style={{ display: 'block' }} />
                                </Link>
                                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                                    <IconButton component="a" href="https://www.instagram.com/northwindfm/" target="_blank" rel="noopener" aria-label="Instagram" size="small">
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton component="a" href="https://www.facebook.com/northwindfamilyministries/" target="_blank" rel="noopener" aria-label="Facebook" size="small">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/company/northwind-family-ministries" target="_blank" rel="noopener" aria-label="LinkedIn" size="small">
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton component="a" href="mailto:info@northwindfm.org" aria-label="Email" size="small">
                                        <EmailIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Contacts</Typography>
                                    <Box sx={{ mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Counselling Reception</Typography>
                                        <Typography variant="body2">
                                            <Link component="a" href="tel:+1 (807) 622-5790 " underline="hover">(807) 622-5790</Link>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Next Steps Reception</Typography>
                                        <Typography variant="body2">
                                            <Link component="a" href="tel:+15555555556" underline="hover">555-555-5556</Link>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                        <Button
                                            component={RouterLink}
                                            to="/contact"
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            Contact Us
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Locations</Typography>
                                {locations.map((loc, i) => (
                                    <Box key={i} sx={{ mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>{loc.label}</Typography>
                                        {loc.lines.map((line, j) => (
                                            <Typography key={j} variant="body2" color="text.secondary">{line}</Typography>
                                        ))}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Site Map</Typography>
                        <Box sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: 24, maxWidth: 720 }}>
                            {routes
                                .filter(r => r.path !== '*' && r.path !== '/privacy')
                                .map(r => (
                                    <Box key={r.path} sx={{ breakInside: 'avoid', mb: 0.75 }}>
                                        <Link
                                            component={RouterLink}
                                            to={r.path}
                                            underline="hover"
                                            color="text.secondary"
                                        >
                                            {r.label}
                                        </Link>
                                    </Box>
                                ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ mt: 2 }} />
            {/* Bottom row: copyright left, privacy right (centered) */}
            <Container sx={{ px: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                    <Typography variant="caption">© {new Date().getFullYear()} NorthWind Family Ministries. All rights reserved.</Typography>
                    <Link component={RouterLink} to="/privacy" variant="caption" underline="hover" color="text.secondary">
                        Privacy Policy
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}
