import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

export default function TeamMemberRedirect() {
    const { slug } = useParams()
    return <Navigate to={`/who-we-are#team-${slug}`} replace />
}
