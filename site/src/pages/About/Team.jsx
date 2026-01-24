import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const team = [
    { name: 'Jane Doe', role: 'Executive Director' },
    { name: 'John Smith', role: 'Program Lead' },
    { name: 'Alex Johnson', role: 'Community Outreach' },
]

export default function Team() {
    return (
        <Box>
        <Grid container spacing={2}>
            {team.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Card variant="outlined">
                <CardContent>
                    <Typography variant="subtitle1">{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Box>
    )
}
