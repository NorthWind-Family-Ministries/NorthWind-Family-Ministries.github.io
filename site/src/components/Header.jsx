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
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Header() {
    const [showBanner, setShowBanner] = React.useState(true)
    const bannerRef = React.useRef(null)
    const [bannerHeight, setBannerHeight] = React.useState(0)
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)
    const [menuRoute, setMenuRoute] = React.useState(null)

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
                    <img src="/images/logos/NFM-Icon.png" alt="NorthWind Family Ministries logo" height="32" style={{ display: 'block' }} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NorthWind Family Ministries
                </Typography>
                {/* Desktop nav buttons */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {routes.filter(r => r.showInNav).map(r => {
                        const hasChildren = r.children && r.children.length > 0
                        const isGroupOnly = !!r.groupOnly || !r.component
                        const isOpen = Boolean(menuAnchorEl) && menuRoute === r
                        if (!hasChildren) {
                            return (
                                <Button
                                    key={r.path || r.label}
                                    component={Link}
                                    to={r.path}
                                    color={r.highlight ? 'primary' : 'inherit'}
                                    variant={r.highlight ? 'contained' : 'text'}
                                    sx={r.highlight ? { ml: 1 } : {}}
                                >
                                    {r.label}
                                </Button>
                            )
                        }
                        return (
                            <Box key={r.path || r.label} sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                {isGroupOnly ? (
                                    <Button
                                        color={r.highlight ? 'primary' : 'inherit'}
                                        variant={r.highlight ? 'contained' : 'text'}
                                        sx={r.highlight ? { ml: 1 } : {}}
                                        aria-haspopup="true"
                                        aria-controls="nav-menu"
                                        aria-expanded={isOpen ? true : undefined}
                                        endIcon={isOpen ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
                                        onClick={(e) => { setMenuAnchorEl(e.currentTarget); setMenuRoute(r); }}
                                    >
                                        {r.label}
                                    </Button>
                                ) : (
                                    <Button
                                        component={Link}
                                        to={r.path}
                                        color={r.highlight ? 'primary' : 'inherit'}
                                        variant={r.highlight ? 'contained' : 'text'}
                                        sx={r.highlight ? { ml: 1 } : {}}
                                    >
                                        {r.label}
                                    </Button>
                                )}
                            </Box>
                        )
                    })}
                    <Menu
                        anchorEl={menuAnchorEl}
                        open={Boolean(menuAnchorEl)}
                        onClose={() => { setMenuAnchorEl(null); setMenuRoute(null); }}
                    >
                        {menuRoute?.children?.map(child => {
                            const childPath = String(child.path || '')
                            const to = childPath.startsWith('/') ? childPath : `${menuRoute.path}/${childPath}`
                            const hasGrandchildren = Array.isArray(child.children) && child.children.length > 0
                            if (!hasGrandchildren) {
                                return (
                                    <MenuItem
                                        key={to}
                                        component={Link}
                                        to={to}
                                        onClick={() => { setMenuAnchorEl(null); setMenuRoute(null); }}
                                    >
                                        {child.label || childPath}
                                    </MenuItem>
                                )
                            }
                            return (
                                <Accordion key={to} elevation={0} disableGutters sx={{ boxShadow: 'none', '&::before': { display: 'none' } }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
                                        <Typography>{child.label || childPath}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ pt: 0 }}>
                                        <MenuItem
                                            component={Link}
                                            to={to}
                                            onClick={() => { setMenuAnchorEl(null); setMenuRoute(null); }}
                                        >
                                            {child.label || childPath}
                                        </MenuItem>
                                        {child.children.map(sub => {
                                            const subPath = String(sub.path || '')
                                            const to2 = subPath.startsWith('/') ? subPath : `${to}/${subPath}`
                                            return (
                                                <MenuItem
                                                    key={to2}
                                                    component={Link}
                                                    to={to2}
                                                    onClick={() => { setMenuAnchorEl(null); setMenuRoute(null); }}
                                                >
                                                    {sub.label || subPath}
                                                </MenuItem>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Menu>
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
