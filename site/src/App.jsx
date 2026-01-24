import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NorthWind Family Ministries
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" paragraph>
          This is a basic React site using Material UI. Update this content to suit your needs.
        </Typography>
        <Button variant="contained" color="primary">Get Started</Button>
      </Container>

      <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="caption">© {new Date().getFullYear()} NorthWind Family Ministries</Typography>
      </Box>
    </Box>
  )
}
