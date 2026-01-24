import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import routes from '../routes'
import MenuIcon from '@mui/icons-material/Menu'
import MobileNavDrawer from './MobileNavDrawer'

export default function Header() {
    const [showBanner, setShowBanner] = React.useState(true)
    const bannerRef = React.useRef(null)
    const [bannerHeight, setBannerHeight] = React.useState(0)
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    React.useEffect(() => {
        const update = () => {
            const h = showBanner && bannerRef.current ? bannerRef.current.offsetHeight : 0
            setBannerHeight(h)
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [showBanner])
    return (
        <>
        {showBanner && (
            <Box ref={bannerRef} sx={{ position: 'sticky', top: 0, zIndex: (theme) => theme.zIndex.appBar + 1 }}>
                <Alert
                    severity="warning"
                    icon={false}
                    action={<Button color="inherit" size="small" onClick={() => setShowBanner(false)}>Dismiss</Button>}
                    sx={{ borderRadius: 0, bgcolor: 'warning.main', color: 'warning.contrastText', textAlign: 'center' }}
                >
                    Site maintenance in progress.
                </Alert>
            </Box>
        )}
        <AppBar position="sticky" sx={{ bgcolor: 'common.white', color: 'text.primary', top: showBanner ? bannerHeight : 0 }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="home" component={Link} to="/" sx={{ mr: 2, p: 0 }}>
                    <img src="/logo.png" alt="NorthWind Family Ministries logo" height="32" style={{ display: 'block' }} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NorthWind Family Ministries
                </Typography>
                {/* Desktop nav buttons */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {routes.filter(r => r.showInNav).map(r => (
                        <Button
                            key={r.path}
                            component={Link}
                            to={r.path}
                            color={r.highlight ? 'primary' : 'inherit'}
                            variant={r.highlight ? 'contained' : 'text'}
                            sx={r.highlight ? { ml: 1 } : {}}
                        >
                            {r.label}
                        </Button>
                    ))}
                </Box>
                {/* Mobile menu icon */}
                <IconButton
                    color="inherit"
                    aria-label="open navigation menu"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                    size="large"
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <MobileNavDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            routes={routes}
        />
        </>
    )
}
