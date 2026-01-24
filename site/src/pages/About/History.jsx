import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function History() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Our History
      </Typography>
      <Typography variant="body2" paragraph>
        NorthWind Family Ministries began with a vision to support families
        through practical programs and compassionate care. Over the years, we
        have grown by partnering with local communities and aligning with
        organizations that share our mission.
      </Typography>
      <Typography variant="body2">
        Today, we continue to expand our reach and impact, always guided by
        the needs of the families we serve.
      </Typography>
    </Box>
  )
}
