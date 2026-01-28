import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

export default function FeatureCards({ items = [], spacing = 3, itemMd = 4, cardVariant = 'outlined', cardSx, gridContainerProps }) {
    return (
        <Grid container spacing={spacing} {...gridContainerProps}>
            {items.map((item) => (
                <Grid item xs={12} md={itemMd} key={item.title}>
                    <Card
                        variant={cardVariant}
                        sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', ...(cardSx || {}) }}
                    >
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {item.title}
                            </Typography>
                            <Box sx={{ width: 64, height: 2, bgcolor: 'primary.main', mx: 'auto', my: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                                {item.subtitle}
                            </Typography>
                        </CardContent>
                        {item.button && item.button.label ? (
                            <CardActions sx={{ justifyContent: 'center', pt: 1, pb: 2 }}>
                                <Button
                                    variant={item.button.variant || 'contained'}
                                    color={item.button.color || 'primary'}
                                    size={item.button.size || 'small'}
                                    href={item.button.href}
                                    onClick={item.button.onClick}
                                    sx={{ ...(item.button.sx || {}) }}
                                    {...(item.button.props || {})}
                                >
                                    {item.button.label}
                                </Button>
                            </CardActions>
                        ) : null}
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
