import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function ConstantContactFormCard({ formId, fallbackHref = '/contact' }) {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(Boolean(formId))

    useEffect(() => {
        if (!window._ctct_m) {
            window._ctct_m = 'de356aae2018565e1be23a9b967ae4d4'
        }
        let observer
        const ensureScript = () => {
            const existing = document.getElementById('ctct-signup-script')
            if (existing) return existing
            const s = document.createElement('script')
            s.id = 'ctct-signup-script'
            s.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js'
            s.async = true
            s.defer = true
            document.body.appendChild(s)
            return s
        }

        const watchFormLoaded = () => {
            const el = formRef.current
            if (!el) return
            // If already populated
            if (el.childNodes && el.childNodes.length > 0) {
                setLoading(false)
                return
            }
            observer = new MutationObserver(() => {
                if (el.childNodes && el.childNodes.length > 0) {
                    setLoading(false)
                    observer && observer.disconnect()
                }
            })
            observer.observe(el, { childList: true, subtree: true })
        }

        const script = ensureScript()
        if (script) {
            // Re-check once script finishes loading
            script.addEventListener('load', () => {
                watchFormLoaded()
            })
        }
        // Also start watching immediately in case script already loaded
        watchFormLoaded()

        return () => {
            observer && observer.disconnect()
        }
    }, [formId])

    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                {formId ? (
                    <>
                        {loading && (
                            <Stack spacing={1} sx={{ mb: 2 }}>
                                <Skeleton variant="text" width="60%" height={28} />
                                <Skeleton variant="rectangular" height={48} />
                                <Skeleton variant="rectangular" height={48} />
                                <Skeleton variant="rectangular" height={48} />
                                <Skeleton variant="rectangular" height={40} sx={{ width: 160 }} />
                            </Stack>
                        )}
                        <div ref={formRef} className="ctct-inline-form" data-form-id={formId} />
                    </>
                ) : (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Newsletter signup is temporarily unavailable. Contact us to subscribe.
                        </Typography>
                        <a href={fallbackHref} style={{ textDecoration: 'none' }}>
                            <Box
                                component="button"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                Contact Us
                            </Box>
                        </a>
                    </Box>
                )}
            </CardContent>
        </Card>
    )
}
