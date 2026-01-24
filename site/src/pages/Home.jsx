import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body1" paragraph>
        This is a basic React site using Material UI. Update this content to suit your needs.
      </Typography>
      <Button variant="contained" color="primary">Get Started</Button>
    </Container>
  )
}
