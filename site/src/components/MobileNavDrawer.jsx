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
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

export default function MobileNavDrawer({ open, onClose, routes }) {
    const location = useLocation()
    const navRoutes = React.useMemo(() => routes.filter(r => r.showInNav), [routes])
    const [openGroups, setOpenGroups] = React.useState({})

    const toggleGroup = (key) => {
        setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }))
    }

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
                const key = r.path || r.label
                const Icon = r.icon
                const hasChildren = r.children && r.children.length > 0
                const isGroupOnly = !!r.groupOnly || !r.component

                if (hasChildren && isGroupOnly) {
                    const open = !!openGroups[key]
                    const selectedParent = location.pathname === r.path
                    return (
                        <Box key={key}>
                            <ListItem disablePadding>
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <ListItemButton
                                        component={Link}
                                        to={r.path}
                                        onClick={handleNavigate}
                                        selected={selectedParent}
                                        sx={{ borderRadius: 1.5, flexGrow: 1 }}
                                    >
                                        {Icon && (
                                            <ListItemIcon>
                                                <Icon fontSize="small" />
                                            </ListItemIcon>
                                        )}
                                        <ListItemText primary={r.label} />
                                    </ListItemButton>
                                    <ListItemButton
                                        onClick={() => toggleGroup(key)}
                                        sx={{ borderRadius: 1.5, width: 48, flexGrow: 0, flexShrink: 0, justifyContent: 'center' }}
                                        aria-label={`Open ${r.label} menu`}
                                    >
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                </Box>
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {r.children.map(child => {
                                        const childPath = String(child.path || '')
                                        const to = childPath.startsWith('/') ? childPath : `${r.path}/${childPath}`
                                        const selected = location.pathname === to
                                        const ChildIcon = child.icon
                                        return (
                                            <ListItem key={`${key}-${to}`} disablePadding sx={{ pl: 4 }}>
                                                <ListItemButton component={Link} to={to} onClick={handleNavigate} selected={selected} sx={{ borderRadius: 1.5 }}>
                                                    {ChildIcon && (
                                                        <ListItemIcon>
                                                            <ChildIcon fontSize="small" />
                                                        </ListItemIcon>
                                                    )}
                                                    <ListItemText primary={child.label || childPath} />
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Collapse>
                        </Box>
                    )
                }

                const selected = location.pathname === r.path
                return (
                    <ListItem key={key} disablePadding>
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
                    </ListItem>
                )
            })}
            </List>
        </Box>
        </Drawer>
    )
}
