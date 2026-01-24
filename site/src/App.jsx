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
                        {routes.map((route) => (
                            route.children && route.children.length > 0 ? (
                                <Route key={route.path} path={route.path} element={<route.component />}>
                                    {route.children.map((child) => (
                                        <Route key={`${route.path}-${child.path}`} path={child.path} element={<child.component />} />
                                    ))}
                                </Route>
                            ) : (
                                <Route key={route.path} path={route.path} element={<route.component />} />
                            )
                        ))}
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}
