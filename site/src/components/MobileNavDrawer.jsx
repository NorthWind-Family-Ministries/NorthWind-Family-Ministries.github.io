import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'

export default function MobileNavDrawer({ open, onClose, routes }) {
    const location = useLocation()
    const navRoutes = React.useMemo(() => routes.filter(r => r.showInNav), [routes])

    const handleNavigate = () => {
        if (onClose) onClose()
    }

    return (
        <Drawer anchor="left" open={open} onClose={onClose} PaperProps={{ sx: { width: 280 } }}>
                <Box role="presentation" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2 }}>
                    <Box
                        component={Link}
                        to="/"
                        onClick={handleNavigate}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        aria-label="Go to home"
                    >
                        <img src="/logo.png" alt="NorthWind Family Ministries logo" height="28" style={{ display: 'block' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            NorthWind
                        </Typography>
                    </Box>
                </Box>
            <Divider />
            <List sx={{ flexGrow: 1 }}>
            {navRoutes.map(r => {
                const selected = location.pathname === r.path
                const Icon = r.icon
                return (
                <ListItem key={r.path} disablePadding>
                    {r.highlight ? (
                        <ListItemButton
                            component={Link}
                            to={r.path}
                            onClick={handleNavigate}
                            selected={selected}
                            sx={{
                                borderRadius: 1.5,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': { bgcolor: 'primary.dark' },
                                '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                                textTransform: 'none',
                            }}
                        >
                            {Icon && (
                                <ListItemIcon>
                                    <Icon fontSize="small" />
                                </ListItemIcon>
                            )}
                            <ListItemText primary={r.label} />
                        </ListItemButton>
                    ) : (
                        <ListItemButton
                            component={Link}
                            to={r.path}
                            onClick={handleNavigate}
                            selected={selected}
                            sx={{ borderRadius: 1.5 }}
                        >
                            {Icon && (
                                <ListItemIcon>
                                    <Icon fontSize="small" />
                                </ListItemIcon>
                            )}
                            <ListItemText primary={r.label} />
                        </ListItemButton>
                    )}
                </ListItem>
                )
            })}
            </List>
            <Divider />
            <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
                © {new Date().getFullYear()} NorthWind Family Ministries
            </Typography>
            </Box>
        </Box>
        </Drawer>
    )
}
