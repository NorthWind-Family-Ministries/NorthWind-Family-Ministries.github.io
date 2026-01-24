import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import routes from '../routes'

export default function Header() {
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'common.white', color: 'text.primary', top: 0 }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="home" component={Link} to="/" sx={{ mr: 2, p: 0 }}>
                    <img src="/logo.png" alt="NorthWind Family Ministries logo" height="32" style={{ display: 'block' }} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NorthWind Family Ministries
                </Typography>
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
            </Toolbar>
        </AppBar>
    )
}
