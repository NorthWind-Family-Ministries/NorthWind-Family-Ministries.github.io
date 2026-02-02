import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Hero from '../components/Hero'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import CircleIcon from '@mui/icons-material/Circle'

export default function Donate() {
    return (
        <>
        <Hero
            slides={[
                {
                    src: 'https://images.unsplash.com/photo-1516321165247-4aa89a3a2d79?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Hands holding a heart',
                },
                {
                    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Community support',
                },
                {
                    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2096&q=80',
                    alt: 'Helping hands',
                },
            ]}
            overlayMode="static"
            staticOverlay={{
                title: 'Make a Difference Today',
                subtitle: 'Your generosity strengthens families and fosters hope.',
            }}
            height="50vh"
            align="center"
            darkOverlay
        />
        {/* Region selector section */}
        <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
            Where are you donating from?
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', mb: 4 }}>
            <Button component="a" href="#donate-canada" variant="contained" color="primary">
            Canadian Donations
            </Button>
            <Button component="a" href="#donate-usa" variant="outlined" color="primary">
            USA Donations
            </Button>
        </Stack>

        {/* Existing content */}
        <Typography variant="h4" gutterBottom>
            Donate
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
            Your support helps NorthWind Family Ministries continue serving families and our community.
            We’ll soon add secure online giving options here. In the meantime, you can explore ways
            to give or learn more about our mission.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" disabled>
            Give Online (Coming Soon)
            </Button>
            <Button variant="outlined" color="primary" href="/who-we-are">
            Ways to Give & About
            </Button>
        </Stack>

        <Box sx={{ mt: 4 }}>
            <Typography variant="caption" color="text.secondary">
            Thank you for your generosity.
            </Typography>
        </Box>
        </Container>

        {/* Target sections */}
        <Container sx={{ py: 4 }}>
        {/* Canadian section with flag background and MUI cards */}
        <Box
            id="donate-canada"
            sx={{
                scrollMarginTop: 80,
                mb: 6,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                p: { xs: 3, md: 4 },
                backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(https://flagcdn.com/w1920/ca.webp), url(https://flagcdn.com/w1920/us.webp)',
                backgroundPosition: 'center left, left center, right center',
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                backgroundSize: 'auto 100%, cover, cover',
                boxShadow: 1,
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 600, textAlign: 'center', mb: 1 }}>
                Thank you to our Canadian donors
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
                Our Canadian supporters have 3 ways to donate to NorthWind Family Ministries
            </Typography>

            <Grid container spacing={3}>
                {/* By Cheque */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderRadius: 2 }}>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <ReceiptLongIcon color="primary" />
                                <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                    By Cheque
                                </Typography>
                            </Stack>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Make cheques payable to NorthWind Family Ministries"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Write in the memo or on a note where to designate the funds (see options below)"
                                    />
                                </ListItem>
                            </List>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Mail to NorthWind Family Ministries
                            </Typography>
                            <Typography>141 May Street S.</Typography>
                            <Typography>Thunder Bay, ON</Typography>
                            <Typography>P7E 1A9</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* By E-Transfer */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderRadius: 2 }}>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <AttachEmailIcon color="primary" />
                                <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                    By E-Transfer
                                </Typography>
                            </Stack>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <span>
                                                E-mail a donation through your bank to{' '}
                                                <a href="mailto:donate@northwindfm.org">donate@northwindfm.org</a>
                                            </span>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="OR, if you are a Royal Bank customer, you can give directly similar to the way you pay your local utility."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <span>
                                                E-mail Jeff Kirkpatrick at{' '}
                                                <a href="mailto:jeff.kirkpatrick@northwindfm.org">jeff.kirkpatrick@northwindfm.org</a>{' '}
                                                for your NorthWind account number and any special instructions.
                                            </span>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* By Credit Card */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderRadius: 2 }}>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <CreditCardIcon color="primary" />
                                <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                    By Credit Card
                                </Typography>
                            </Stack>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact Jeff Kirkpatrick, Administrator" />
                                </ListItem>
                            </List>
                            <Typography sx={{ mt: 1 }}>
                                <a href="tel:+18079357655">1-807-935-7655</a>
                            </Typography>
                            <Typography>
                                <a href="mailto:jeff.kirkpatrick@northwindfm.org">jeff.kirkpatrick@northwindfm.org</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

        <Box id="donate-usa" sx={{ scrollMarginTop: 80 }}>
            <Typography variant="h5" gutterBottom>
            USA Donations
            </Typography>
            <Typography variant="body1" paragraph>
            If you are donating from the USA, please use the USA donation options below.
            Detailed instructions or a secure form can be added here.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" disabled>
                Give Online (USA) — Coming Soon
            </Button>
            <Button variant="outlined" color="primary" href="/who-we-are">
                Learn More
            </Button>
            </Stack>
        </Box>
        </Container>
        </>
    )
}
