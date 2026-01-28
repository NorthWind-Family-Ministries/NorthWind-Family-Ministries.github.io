import React from 'react'
import Box from '@mui/material/Box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'

export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />

                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Routes>
                        {routes.filter(r => r.component).map((route) => (
                            <Route key={route.path} path={route.path} element={<route.component />} />
                        ))}
                        {routes.flatMap((route) =>
                            (route.children || []).map((child) => {
                                const childPath = String(child.path || '')
                                const fullPath = childPath.startsWith('/')
                                    ? childPath
                                    : `${route.path}/${childPath}`
                                return (
                                    <Route
                                        key={fullPath}
                                        path={fullPath}
                                        element={<child.component />}
                                    />
                                )
                            })
                        )}
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}
