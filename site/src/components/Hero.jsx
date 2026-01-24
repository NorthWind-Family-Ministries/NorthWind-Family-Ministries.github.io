import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

/**
 * Hero component with full-width cycling background images and overlay text.
 *
 * Props:
 * - slides: Array<{
 *     src: string,
 *     alt?: string,
 *     title?: string,
 *     subtitle?: string,
 *     ctaLabel?: string,
 *     ctaHref?: string
 *   }>
 * - overlayMode: 'per-slide' | 'static' (default: 'per-slide')
 * - staticOverlay?: { title?: string, subtitle?: string, ctaLabel?: string, ctaHref?: string }
 * - intervalMs?: number (default: 8000)
 * - height?: string | number (default: '70vh')
 * - align?: 'left' | 'center' | 'right' (default: 'center')
 * - darkOverlay?: boolean (default: true)
 */
export default function Hero({
    slides = [],
    overlayMode = 'per-slide',
    staticOverlay,
    intervalMs = 8000,
    height = '70vh',
    align = 'center',
    darkOverlay = true,
    showIndicators = true,
    }) {
    const [index, setIndex] = useState(0)

    const safeSlides = useMemo(() => (Array.isArray(slides) && slides.length > 0 ? slides : []), [slides])

    useEffect(() => {
        if (safeSlides.length <= 1) return
        const id = setInterval(() => {
        setIndex((prev) => (prev + 1) % safeSlides.length)
        }, intervalMs)
        return () => clearInterval(id)
    }, [safeSlides.length, intervalMs])

    const currentSlide = safeSlides[index]

    const overlay = overlayMode === 'static'
        ? (staticOverlay || {})
        : ({
            title: currentSlide?.title,
            subtitle: currentSlide?.subtitle,
            ctaLabel: currentSlide?.ctaLabel,
            ctaHref: currentSlide?.ctaHref,
        })

    const justify = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'
    const textAlign = align === 'left' ? 'left' : align === 'right' ? 'right' : 'center'

    return (
        <Box sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height,
        }}>
        {/* Background slides */}
        {safeSlides.map((s, i) => (
            <Box
            key={i}
            role="img"
            aria-label={s.alt || 'Background image'}
            sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${s.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'opacity 1.2s ease-in-out',
                opacity: i === index ? 1 : 0,
            }}
            />
        ))}

        {/* Optional dark gradient for readability */}
        {darkOverlay && (
            <Box sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.55) 100%)',
            }} />
        )}

        {/* Overlay content */}
        <Box sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: justify,
        }}>
            <Container maxWidth="lg">
            {(overlay.title || overlay.subtitle) && (
                <Box sx={{ textAlign }}>
                {overlay.title && (
                    <Typography variant="h2" component="h1" sx={{ color: '#fff', fontWeight: 700 }} gutterBottom>
                    {overlay.title}
                    </Typography>
                )}
                {overlay.subtitle && (
                    <Typography variant="h6" sx={{ color: '#fff', opacity: 0.9 }} gutterBottom>
                    {overlay.subtitle}
                    </Typography>
                )}
                {overlay.ctaLabel && overlay.ctaHref && (
                    <Button
                    variant="contained"
                    color="primary"
                    href={overlay.ctaHref}
                    sx={{ mt: 2 }}
                    >
                    {overlay.ctaLabel}
                    </Button>
                )}
                </Box>
            )}
            </Container>
        </Box>
        {showIndicators && safeSlides.length > 1 && (
            <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 3,
            }}>
                <Box sx={{
                    px: 1.5,
                    py: 1,
                    borderRadius: 999,
                    bgcolor: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    gap: 1,
                }}>
                    {safeSlides.map((_, i) => (
                        <Box
                            key={i}
                            role="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setIndex(i)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                bgcolor: i === index ? 'primary.main' : 'rgba(255,255,255,0.85)',
                                boxShadow: i === index ? 2 : 0,
                                transform: i === index ? 'scale(1.2)' : 'scale(1)',
                            }}
                        />
                    ))}
                </Box>
            </Box>
        )}
        </Box>
  )
}
