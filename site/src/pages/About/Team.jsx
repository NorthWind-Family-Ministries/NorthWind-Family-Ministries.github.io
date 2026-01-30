import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

const team = [
    { name: 'Bonita Ledua', role: 'Chief Executive Officer\nRegistered Psychotherapist', photo: '/images/team/bonita.jpg', group: 'Leadership' },
    { name: 'Bera Ledua', role: 'Co-Founder', photo: '/images/team/bera.jpg', group: 'Leadership' },
    { name: 'Wes Carlisle', role: 'Director of\nAdministration', photo: '/images/team/wes.jpg', group: 'Leadership' },
    { name: 'Jeff Kirkpatrick', role: 'Administration\nDepartment Head', photo: '/images/team/jeff.jpg', group: 'Leadership' },
    { name: 'Alissa Darrow', role: 'Counselling\nDepartment Head\n\nRegistered Professional Counsellor / Registered Social Service Worker', photo: '/images/team/Alissa.jpg', group: 'Leadership' },
    { name: 'Justin Hiebert', role: 'Community Care\nDepartment Head\n\nThe Gathering Team Lead', photo: '/images/team/Justin.jpg', group: 'Leadership' },
    { name: 'Deanna Blanchard', role: 'Communication and Connections\nDepartment Head', photo: '/images/team/Deanna.jpg', group: 'Leadership' },
    { name: 'Karl Janzen', role: 'Ministry Partnership Coordinator', photo: '/images/team/Karl.jpg', group: 'Leadership' },
    { name: 'Julie McKenna', role: 'Registered\nPsychotherapist', photo: '/images/team/Julie.jpg', group: 'Psychotherapists' },
    { name: 'Heather Le Quant', role: 'Registered Psychotherapist – Family Strengthening Program', photo: '/images/team/Heather.jpg', group: 'Psychotherapists' },
    { name: 'Florence Tan', role: 'Registered Psychotherapist', photo: '/images/team/Florence.jpg', group: 'Psychotherapists' },
    { name: 'Hannah Chun', role: 'Registered Psychotherapist', photo: '/images/team/Hannah.jpg', group: 'Psychotherapists' },
    { name: 'Kyla Tempelman', role: 'Registered Psychotherapist', photo: '/images/team/Kyla.jpg', group: 'Psychotherapists' },
    { name: 'Kelsey Hall', role: 'Psychotherapist\nIntern', photo: '/images/team/Kelsey.jpg', group: 'Psychotherapists' },
    { name: 'Merline Desrameaux', role: 'Counsellor\nIntern', photo: '/images/team/Merline.png', group: 'Psychotherapists' },
    { name: 'Sherrie-Lee Petrie', role: 'Registered\nSocial Worker', photo: '/images/team/Sherrie-Lee.jpg', group: 'Social Workers' },
    { name: 'Jubin Abraham', role: 'Registered Social Worker', photo: '/images/team/Jubin.jpg', group: 'Social Workers' },
    { name: 'Heide Nicholson', role: 'Registered Social Worker', photo: '/images/team/Heide.jpg', group: 'Social Workers' },
    { name: 'Torika Ledua', role: 'Registered Social Worker (on leave)', photo: '/images/team/Torika.jpg', group: 'Social Workers' },
    { name: 'Lauren Hartman', role: 'Registered Social Service Worker', photo: '/images/team/Lauren.jpg', group: 'Social Workers' },
    { name: 'Jasmin Maki-Maunus', role: 'Social and Community Service Worker', photo: '', group: 'The Gathering' },
    { name: 'Gretchen Sarpiya', role: 'Executive Secretary', photo: '', group: 'Admin & Support' },
    { name: 'Khandra Brown', role: 'Registered Social Service Worker (on leave)', photo: '/images/team/Khandra.jpg', group: 'Social Workers' },
    { name: 'Anisha Alexander', role: 'Counselling Receptionist ', photo: '/images/team/Anisha.jpg', group: 'Admin & Support' },
    { name: 'Anna Sarpiya', role: 'Counselling Appointment Secretary', photo: '', group: 'Admin & Support' },
    { name: 'Francisca Keelson', role: 'Counselling Administrative Assistant ', photo: '/images/team/Francisca.jpg', group: 'Admin & Support' },
    { name: 'Mercy Ayombile', role: 'Office Administrative Assistant – Next Steps ', photo: '', group: 'Admin & Support' },
    { name: 'Ruhi Kruze', role: 'Family Strengthening Assistant  ', photo: '', group: 'Admin & Support' },
    { name: 'Demerai Meekis', role: 'Food Services\nLead – The Gathering', photo: '/images/team/Demerai.jpg', group: 'The Gathering' },
    { name: 'David Warner', role: 'Assistant – The Gathering', photo: '', group: 'The Gathering' },
    { name: 'Josiah Ledua', role: 'Information\nTechnology Lead ', photo: '', group: 'Facilities & IT' },
    { name: 'Abin Rajan', role: 'Maintenance Lead', photo: '/images/team/Abin.jpg', group: 'Facilities & IT' },
    { name: 'Erika Weiher', role: 'Custodial Lead', photo: '/images/team/Erika.png', group: 'Facilities & IT' },
    { name: 'Anton Avon Fernando', role: 'Facilities Staff', photo: '/images/team/Anton.jpg', group: 'Facilities & IT' },
    { name: 'Carol Loney', role: 'Board Chair', photo: '/images/team/Carol.jpg', group: 'Board' },   
    { name: 'John Condon', role: 'Vice Chairman', photo: '/images/team/John.png', group: 'Board' },
    { name: 'Chief Harvey Yesno', role: 'Board Member', photo: '', group: 'Board' },
    { name: 'Franz Seibel', role: 'Board Member', photo: '', group: 'Board'},
    { name: 'Peggy Blekkenhorst', role: 'Treasurer', photo: '/images/team/Peggy.png', group: 'Board' },
    { name: 'John Andres', role: 'Board Member', photo: '/images/team/JohnAndres.png', group: 'Board' },
    { name: 'Rev. Milissa Ewing', role: 'Board Member', photo: '/images/team/MilissaEwing.jpg', group: 'Board' }
]

export default function Team() {
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
                                const initials = member.name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .slice(0, 2)
                                    .join('');
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={member.name}>
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
                                        >
                                            <Avatar
                                                alt={member.name}
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
                                                    {member.name}
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
                                                <Button variant="outlined" size="small">VIEW BIO</Button>
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
