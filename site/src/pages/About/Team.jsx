import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const team = [
    { firstName: 'Bonita', lastName: 'Ledua', role: 'Chief Executive Officer\nRegistered Psychotherapist', photo: '/images/team/bonita.jpg', group: 'Leadership' },
    { firstName: 'Bera', lastName: 'Ledua', role: 'Co-Founder', photo: '/images/team/bera.jpg', group: 'Leadership' },
    { firstName: 'Wes', lastName: 'Carlisle', role: 'Director of\nAdministration', photo: '/images/team/wes.jpg', group: 'Leadership' },
    { firstName: 'Jeff', lastName: 'Kirkpatrick', role: 'Administration\nDepartment Head', photo: '/images/team/jeff.jpg', group: 'Leadership' },
    { firstName: 'Alissa', lastName: 'Darrow', role: 'Counselling\nDepartment Head\n\nRegistered Professional Counsellor / Registered Social Service Worker', photo: '/images/team/Alissa.jpg', group: 'Leadership' },
    { firstName: 'Justin', lastName: 'Hiebert', role: 'Community Care\nDepartment Head\n\nThe Gathering Team Lead', photo: '/images/team/Justin.jpg', group: 'Leadership' },
    { firstName: 'Deanna', lastName: 'Blanchard', role: 'Communication and Connections\nDepartment Head', photo: '/images/team/Deanna.jpg', group: 'Leadership' },
    { firstName: 'Karl', lastName: 'Janzen', role: 'Ministry Partnership Coordinator', photo: '/images/team/Karl.jpg', group: 'Leadership' },
    { firstName: 'Julie', lastName: 'McKenna', role: 'Registered\nPsychotherapist', photo: '/images/team/Julie.jpg', group: 'Psychotherapists' },
    { firstName: 'Heather', lastName: 'Le Quant', role: 'Registered Psychotherapist – Family Strengthening Program', photo: '/images/team/Heather.jpg', group: 'Psychotherapists' },
    { firstName: 'Florence', lastName: 'Tan', role: 'Registered Psychotherapist', photo: '/images/team/Florence.jpg', group: 'Psychotherapists' },
    { firstName: 'Hannah', lastName: 'Chun', role: 'Registered Psychotherapist', photo: '/images/team/Hannah.jpg', group: 'Psychotherapists' },
    { firstName: 'Kyla', lastName: 'Tempelman', role: 'Registered Psychotherapist', photo: '/images/team/Kyla.jpg', group: 'Psychotherapists' },
    { firstName: 'Kelsey', lastName: 'Hall', role: 'Psychotherapist\nIntern', photo: '/images/team/Kelsey.jpg', group: 'Psychotherapists' },
    { firstName: 'Merline', lastName: 'Desrameaux', role: 'Counsellor\nIntern', photo: '/images/team/Merline.png', group: 'Psychotherapists' },
    { firstName: 'Sherrie-Lee', lastName: 'Petrie', role: 'Registered\nSocial Worker', photo: '/images/team/Sherrie-Lee.jpg', group: 'Social Workers' },
    { firstName: 'Jubin', lastName: 'Abraham', role: 'Registered Social Worker', photo: '/images/team/Jubin.jpg', group: 'Social Workers' },
    { firstName: 'Heide', lastName: 'Nicholson', role: 'Registered Social Worker', photo: '/images/team/Heide.jpg', group: 'Social Workers' },
    { firstName: 'Torika', lastName: 'Ledua', role: 'Registered Social Worker (on leave)', photo: '/images/team/Torika.jpg', group: 'Social Workers' },
    { firstName: 'Lauren', lastName: 'Hartman', role: 'Registered Social Service Worker', photo: '/images/team/Lauren.jpg', group: 'Social Workers' },
    { firstName: 'Jasmin', lastName: 'Maki-Maunus', role: 'Social and Community Service Worker', photo: '', group: 'The Gathering' },
    { firstName: 'Gretchen', lastName: 'Sarpiya', role: 'Executive Secretary', photo: '', group: 'Admin & Support' },
    { firstName: 'Khandra', lastName: 'Brown', role: 'Registered Social Service Worker (on leave)', photo: '/images/team/Khandra.jpg', group: 'Social Workers' },
    { firstName: 'Anisha', lastName: 'Alexander', role: 'Counselling Receptionist ', photo: '/images/team/Anisha.jpg', group: 'Admin & Support' },
    { firstName: 'Anna', lastName: 'Sarpiya', role: 'Counselling Appointment Secretary', photo: '', group: 'Admin & Support' },
    { firstName: 'Francisca', lastName: 'Keelson', role: 'Counselling Administrative Assistant ', photo: '/images/team/Francisca.jpg', group: 'Admin & Support' },
    { firstName: 'Mercy', lastName: 'Ayombile', role: 'Office Administrative Assistant – Next Steps ', photo: '', group: 'Admin & Support' },
    { firstName: 'Ruhi', lastName: 'Kruze', role: 'Family Strengthening Assistant  ', photo: '', group: 'Admin & Support' },
    { firstName: 'Demerai', lastName: 'Meekis', role: 'Food Services\nLead – The Gathering', photo: '/images/team/Demerai.jpg', group: 'The Gathering' },
    { firstName: 'David', lastName: 'Warner', role: 'Assistant – The Gathering', photo: '', group: 'The Gathering' },
    { firstName: 'Josiah', lastName: 'Ledua', role: 'Information\nTechnology Lead ', photo: '', group: 'Facilities & IT' },
    { firstName: 'Abin', lastName: 'Rajan', role: 'Maintenance Lead', photo: '/images/team/Abin.jpg', group: 'Facilities & IT' },
    { firstName: 'Erika', lastName: 'Weiher', role: 'Custodial Lead', photo: '/images/team/Erika.png', group: 'Facilities & IT' },
    { firstName: 'Anton Avon', lastName: 'Fernando', role: 'Facilities Staff', photo: '/images/team/Anton.jpg', group: 'Facilities & IT' },
    { firstName: 'Carol', lastName: 'Loney', role: 'Board Chair', photo: '/images/team/Carol.jpg', group: 'Board' },   
    { firstName: 'John', lastName: 'Condon', role: 'Vice Chairman', photo: '/images/team/John.png', group: 'Board' },
    { title: 'Chief', firstName: 'Harvey', lastName: 'Yesno', role: 'Board Member', photo: '', group: 'Board' },
    { firstName: 'Franz', lastName: 'Seibel', role: 'Board Member', photo: '', group: 'Board'},
    { firstName: 'Peggy', lastName: 'Blekkenhorst', role: 'Treasurer', photo: '/images/team/Peggy.png', group: 'Board' },
    { firstName: 'John', lastName: 'Andres', role: 'Board Member', photo: '/images/team/JohnAndres.png', group: 'Board' },
    { title: 'Rev.', firstName: 'Milissa', lastName: 'Ewing', role: 'Board Member', photo: '/images/team/MilissaEwing.jpg', group: 'Board' }
]

export default function Team() {
    const slugify = (s) => s
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    const groupOrder = [
        'Leadership',
        'Psychotherapists',
        'Social Workers',
        'Admin & Support',
        'The Gathering',
        'Facilities & IT',
        'Board',
    ];

    const membersByGroup = team.reduce((acc, member) => {
        const key = member.group || 'Other';
        if (!acc[key]) acc[key] = [];
        acc[key].push(member);
        return acc;
    }, {});

    return (
        <Box sx={{ py: 4 }}>
            {groupOrder.map((group) => (
                membersByGroup[group] ? (
                    <Box key={group} sx={{ mb: 6 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            {group}
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {membersByGroup[group].map((member) => {
                                const fullName = `${member.firstName || ''} ${member.lastName || ''}`.trim();
                                const displayName = [member.title, fullName].filter(Boolean).join(' ').trim();
                                const initials = `${member.firstName?.[0] || ''}${member.lastName?.[0] || ''}`;
                                const slug = `${slugify(member.firstName || '')}-${slugify(member.lastName || '')}`.replace(/^-|-$/g, '');
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={displayName}>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                p: 2,
                                                backgroundColor: 'transparent',
                                                boxShadow: 'none',
                                                border: 'none',
                                            }}
                                            id={`team-${slug}`}
                                        >
                                            <Avatar
                                                alt={displayName}
                                                src={member.photo}
                                                sx={{
                                                    width: 220,
                                                    height: 220,
                                                    mb: 2,
                                                }}
                                            >
                                                {initials}
                                            </Avatar>
                                            <CardContent sx={{ textAlign: 'center', pt: 0 }}>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ color: 'error.main', fontWeight: 600 }}
                                                >
                                                    {displayName}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ whiteSpace: 'pre-line', mt: 1 }}
                                                >
                                                    {member.role}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ pb: 2 }}>
                                                <Button component={Link} to={`/about/team/${slug}`} variant="outlined" size="small">VIEW BIO</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                ) : null
            ))}
        </Box>
    )
}
