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
        { label: 'Land-based Facility', lines: ['235 Warnica Lake West Road', 'Gorham, Ontario', 'P7G 0Y3'] },
    ]
    return (
        <>
            {/* Get involved (full-width highlight) placed before grey footer */}
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    py: 6,
                    mb: 0,
                }}
            >
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Get Involved
                    </Typography>
                    <Typography variant="body1" align="center" color="inherit" sx={{ mb: 2 }}>
                        Join us in making a difference. Whether through volunteering, donating, or spreading the word, your support helps us continue our mission.
                    </Typography>
                    <Box textAlign="center">
                        <a href="/donate" style={{ textDecoration: 'none' }}>
                            <Box
                                component="button"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'primary.main',
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                Donate Now
                            </Box>
                        </a>
                    </Box>
                </Container>
            </Box>
            <Box component="footer" sx={{ mt: 'auto', pt: 3, bgcolor: 'grey.900', color: 'grey.100', borderTop: (theme) => `1px solid ${theme.palette.grey[800]}` }}>
                {/* Top grid: logo left, sitemap right, centered */}
                <Container sx={{ px: { xs: 2, md: 3 } }}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={7}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: { xs: 2, md: 0 }, flex: { xs: '1 1 0', md: '0 0 auto' }, minWidth: 0 }}>
                                <Link component={RouterLink} to="/" aria-label="Home" sx={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                                    <img src="/images/logos/NFM-Logo-White.png" alt="NorthWind Family Ministries wordmark logo" height="80" style={{ display: 'block' }} />
                                </Link>
                                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                                    <IconButton component="a" href="https://www.instagram.com/northwindfm/" target="_blank" rel="noopener" aria-label="Instagram" size="small" color="inherit">
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton component="a" href="https://www.facebook.com/northwindfamilyministries/" target="_blank" rel="noopener" aria-label="Facebook" size="small" color="inherit">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/company/northwind-family-ministries" target="_blank" rel="noopener" aria-label="LinkedIn" size="small" color="inherit">
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton component="a" href="mailto:info@northwindfm.org" aria-label="Email" size="small" color="inherit">
                                        <EmailIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Contacts</Typography>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }} color='primary'>NorthWind Reception</Typography>
                                        <Typography variant="body2">
                                            <Link component="a" href="tel:+15555555556" underline="hover" color="inherit">555-555-5556</Link>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }} color='primary'>Counselling Reception</Typography>
                                        <Typography variant="body2">
                                            <Link component="a" href="tel:+1 (807) 622-5790 " underline="hover" color="inherit">(807) 622-5790</Link>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }} color='primary'>Next Steps Reception</Typography>
                                        <Typography variant="body2">
                                            <Link component="a" href="tel:+15555555556" underline="hover" color="inherit">555-555-5556</Link>
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
                            <Box sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, flex: { xs: '1 1 0', md: '0 0 auto' }, minWidth: 0 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Locations</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 0.5, flexDirection: { xs: 'column', md: 'row' } }}>
                                    <Box sx={{ minWidth: 0, width: { xs: '100%', md: 'auto' } }}>
                                        {locations.map((loc, i) => (
                                            <Box key={i} sx={{ mb: 0.5 }}>
                                                <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>{loc.label}</Typography>
                                                {loc.lines.map((line, j) => (
                                                    <Typography key={j} variant="body2" color="grey.300">{line}</Typography>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 260px' }, ml: { md: 2 }, mt: { xs: 1, md: 0 }, width: { xs: '100%', md: 'auto' }, minWidth: 0, maxWidth: '100%' }}>
                                        <Box sx={{ height: 180, borderRadius: 1, overflow: 'hidden' }}>
                                            <iframe
                                                title="Counselling & Programs Map"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, display: 'block' }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src="https://www.google.com/maps?q=141+May+Street+South,+Thunder+Bay,+Ontario+P7E+1A9,138+May+Street+South,+Thunder+Bay,+Ontario+P7E+1B3&output=embed"
                                            />
                                        </Box>
                                        <Box sx={{ height: 180, borderRadius: 1, overflow: 'hidden', mt: 1 }}>
                                            <iframe
                                                title="theCove Map"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, display: 'block' }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src="https://www.google.com/maps?q=235+Warnica+Lake+West+Road,+Gorham,+Ontario+P7G+0Y3&output=embed"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'grey.100' }}>Site Map</Typography>
                        <Box sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: 24, maxWidth: 540 }}>
                            {(() => {
                                // Flatten top-level + children + sub-children into a single list with depth
                                const list = []
                                const exclude = (p) => !p || p === '*' || p === '/privacy' || String(p).includes(':')
                                const isProgramLabel = (label) => label === 'Family Strengthening Program' || label === 'Cooking For Life'

                                routes.forEach((route) => {
                                    if (!exclude(route.path) && route.label) {
                                        list.push({ path: route.path, label: route.label, depth: 0 })
                                    }
                                    (route.children || []).forEach((child) => {
                                        const childPath = String(child.path || '')
                                        const fullChildPath = childPath.startsWith('/')
                                            ? childPath
                                            : `${route.path}/${childPath}`
                                        if (!exclude(fullChildPath) && child.label) {
                                            list.push({ path: fullChildPath, label: child.label, depth: 1 })
                                        }
                                        (child.children || []).forEach((sub) => {
                                            const subPath = String(sub.path || '')
                                            const fullSubPath = subPath.startsWith('/')
                                                ? subPath
                                                : `${fullChildPath}/${subPath}`
                                            // Exclude program pages from general sitemap; they'll appear under the Programs section
                                            if (!exclude(fullSubPath) && sub.label && !isProgramLabel(sub.label)) {
                                                list.push({ path: fullSubPath, label: sub.label, depth: 2 })
                                            }
                                        })
                                    })
                                })

                                // Deduplicate by path while preserving order
                                const seen = new Set()
                                const deduped = list.filter((item) => {
                                    if (seen.has(item.path)) return false
                                    seen.add(item.path)
                                    return true
                                })

                                return deduped.map((r) => (
                                    <Box
                                        key={r.path}
                                        sx={{
                                            breakInside: 'avoid',
                                            mb: 0.75,
                                            pl: r.depth === 0 ? 0 : r.depth === 1 ? 1.5 : 3,
                                        }}
                                    >
                                        <Link component={RouterLink} to={r.path} underline="hover" color="grey.300">
                                            {r.label}
                                        </Link>
                                    </Box>
                                ))
                            })()}
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 2, color: 'grey.100' }}>Programs</Typography>
                        <Box>
                            {(() => {
                                // Collect canonical program links (prefer under What We Do)
                                const isProgramLabel = (label) => label === 'Family Strengthening Program' || label === 'Cooking For Life'
                                const programsByLabel = new Map()

                                routes.forEach((route) => {
                                    (route.children || []).forEach((child) => {
                                        const childPath = String(child.path || '')
                                        const fullChildPath = childPath.startsWith('/') ? childPath : `${route.path}/${childPath}`
                                        ;(child.children || []).forEach((sub) => {
                                            if (!sub.label || !isProgramLabel(sub.label)) return
                                            const subPath = String(sub.path || '')
                                            const fullSubPath = subPath.startsWith('/') ? subPath : `${fullChildPath}/${subPath}`

                                            const existing = programsByLabel.get(sub.label)
                                            // Prefer the path under the "What We Do" top-level group for canonical linking
                                            if (!existing || route.label === 'What We Do') {
                                                programsByLabel.set(sub.label, { path: fullSubPath, label: sub.label })
                                            }
                                        })
                                    })
                                })

                                return Array.from(programsByLabel.values()).map((p) => (
                                    <Box key={p.path} sx={{ mb: 0.75 }}>
                                        <Link component={RouterLink} to={p.path} underline="hover" color="grey.300">
                                            {p.label}
                                        </Link>
                                    </Box>
                                ))
                            })()}
                        </Box>
                    </Grid>
                </Grid>
                </Container>
                <Divider sx={{ mt: 2, bgcolor: 'grey.800' }} />
                {/* Bottom row: copyright left, privacy right (centered) */}
                <Container sx={{ px: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                        <Typography variant="caption" color="grey.400">© {new Date().getFullYear()} NorthWind Family Ministries. All rights reserved. | Designed by <Link href="https://www.backslashdesigns.ca" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">Backslash Designs</Link></Typography>
                        <Link component={RouterLink} to="/privacy" variant="caption" underline="hover" color="grey.400">
                            Privacy Policy
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
