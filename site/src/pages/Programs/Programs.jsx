import React, { useMemo, useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import FeatureCards from '../../components/FeatureCards'
import Hero from '../../components/Hero'

export default function Programs() {
    // Filter options sourced from existing site structure
    const pillarOptions = ['Counselling', 'LifeBuild', 'Land Based', 'Spiritual Growth']
    const sectorOptions = ['Northern Care', 'Street Care', 'Community Care', 'Prison Care']

    // Program catalog with metadata for filtering
    const programs = useMemo(() => ([
        {
            title: 'Family Strengthening Program',
            subtitle: 'A comprehensive program focused on empowering and supporting families.',
            pillar: 'Counselling',
            sector: 'Community Care',
            to: '/programs/fsp',
        },
        {
            title: 'Cooking For Life',
            subtitle: 'Practical cooking skills and nutrition education for everyday life.',
            pillar: 'LifeBuild',
            sector: 'Community Care',
            to: '/programs/cooking-for-life',
        },
        {
            title: 'Learning Centre',
            subtitle: 'Study God’s Word and grow through accessible classes.',
            pillar: 'Spiritual Growth',
            sector: 'Community Care',
            to: '/programs/learning-centre',
        },
        {
            title: 'Camps',
            subtitle: 'Day camps and family experiences at Eagle’s Cove.',
            pillar: 'Land Based',
            sector: 'Community Care',
            to: '/programs/camps',
        },
        {
            title: 'Retreats',
            subtitle: 'Rest and reflection at Eagle’s Cove.',
            pillar: 'Land Based',
            sector: 'Community Care',
            to: '/programs/retreats',
        },
        {
            title: 'Compass',
            subtitle: 'Northern Response Team supporting communities after crisis.',
            pillar: 'Counselling',
            sector: 'Northern Care',
            to: '/programs/compass',
        },
    ]), [])

    const [selectedPillars, setSelectedPillars] = useState([])
    const [selectedSectors, setSelectedSectors] = useState([])

    const toggleSelection = (list, setList, value) => {
        setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
    }

    const filteredPrograms = useMemo(() => {
        return programs.filter((p) => {
            const pillarMatch = selectedPillars.length === 0 || selectedPillars.includes(p.pillar)
            const sectorMatch = selectedSectors.length === 0 || selectedSectors.includes(p.sector)
            return pillarMatch && sectorMatch
        })
    }, [programs, selectedPillars, selectedSectors])

    return (
        <>
            <Hero
                slides={[{
                    src: '/images/areas/counselling.jpg',
                    alt: 'All Programs',
                    title: 'All Programs',
                    subtitle: 'Practical supports that strengthen families and relationships.',
                    ctaLabel: 'Ask About FSP',
                    ctaHref: '/contact?area=Family%20Strengthening%20Program',
                }]}
                overlayMode="per-slide"
                height="60vh"
                align="center"
                darkOverlay
                showIndicators={false}
            />
            {/* Filters Section for Programs */}
            <Container sx={{ py: 3 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>Filter Programs</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Use the chips below to filter by pillar and care sector.
                    </Typography>
                </Box>
                <Stack spacing={2} sx={{ mb: 1 }}>
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>By Pillar</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {pillarOptions.map((opt) => (
                                <Chip
                                    key={opt}
                                    label={opt}
                                    clickable
                                    onClick={() => toggleSelection(selectedPillars, setSelectedPillars, opt)}
                                    color={selectedPillars.includes(opt) ? 'primary' : 'default'}
                                    variant={selectedPillars.includes(opt) ? 'filled' : 'outlined'}
                                    sx={{ mb: 1 }}
                                    aria-pressed={selectedPillars.includes(opt)}
                                />
                            ))}
                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>By Care Sector</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {sectorOptions.map((opt) => (
                                <Chip
                                    key={opt}
                                    label={opt}
                                    clickable
                                    onClick={() => toggleSelection(selectedSectors, setSelectedSectors, opt)}
                                    color={selectedSectors.includes(opt) ? 'primary' : 'default'}
                                    variant={selectedSectors.includes(opt) ? 'filled' : 'outlined'}
                                    sx={{ mb: 1 }}
                                    aria-pressed={selectedSectors.includes(opt)}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Stack>
                {(selectedPillars.length > 0 || selectedSectors.length > 0) && (
                    <Typography variant="caption" color="text.secondary">
                        Showing {filteredPrograms.length} of {programs.length} programs
                    </Typography>
                )}
            </Container>


            <Container sx={{ py: 6 }}>
                <FeatureCards
                    items={filteredPrograms.map((p) => ({
                        title: p.title,
                        subtitle: p.subtitle,
                        button: {
                            label: 'Learn more',
                            variant: 'text',
                            props: { component: RouterLink, to: p.to },
                        },
                    }))}
                    itemMd={6}
                    spacing={2}
                />
            </Container>
        </>
    )
}
