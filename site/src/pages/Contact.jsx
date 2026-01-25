import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Contact() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        This contact page is under construction. In the meantime, please call our receptions or reach us via email.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">Counselling Reception: 555-555-5555</Typography>
        <Typography variant="body2">Next Steps Reception: 555-555-5556</Typography>
        <Typography variant="body2">Email: info@northwindfm.org</Typography>
      </Box>
    </Container>
  )
}
