import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
        main: '#9b1717',
        light: '#b93535',
        dark: '#6f1010',
        contrastText: '#ffffff',
        },
        // Cool teal complements the deep crimson primary
        secondary: {
        main: '#0e7490',
        light: '#36a3bf',
        dark: '#0a5468',
        contrastText: '#ffffff',
        },
        success: { main: '#256d3a' },
        warning: { main: '#b45309' },
        error: { main: '#b91c1c' },
        info: { main: '#0e7490' },
        background: {
        default: '#fff6f6',
        paper: '#ffffff',
        },
        text: {
        primary: '#1F2937',
        secondary: '#4B5563',
        },
    },
    typography: {
        fontFamily: '"PT Serif", serif',
    },
    components: {
        MuiAppBar: {
        styleOverrides: {
            colorPrimary: {
            backgroundColor: '#9b1717',
            },
        },
        },
        MuiButton: {
        styleOverrides: {
            root: { borderRadius: 8 },
        },
        },
    },
})

export default theme
