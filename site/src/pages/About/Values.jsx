import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FeatureCards from '../../components/FeatureCards'

export default function Values() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Our Mission
            </Typography>
            <Typography variant="body2" paragraph>
                Our main cause at NorthWind Family Ministries is to provide sacred places to embrace each other’s stories; find belongingness through a borderless community and improve meaningful connections to God and one another–as they were always meant to be.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                What We Offer
            </Typography>

            <FeatureCards
                items={[
                    { title: 'Whole Life Discipleship', subtitle: 'Growing Your Life', button: { label: 'Learn More', href: '/what-we-do/lifebuild' } },
                    { title: 'Family Healing', subtitle: 'Bring health to your relationships', button: { label: 'Learn More', href: '/what-we-do/counselling' } },
                    { title: 'A Vibrant Community', subtitle: 'Develop a sense of belonging', button: { label: 'Learn More', href: '/what-we-do' } },
                ]}
            />
        </Box>
    )
}
