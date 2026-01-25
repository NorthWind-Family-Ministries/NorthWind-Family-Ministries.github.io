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
    { name: 'Bonita Ledua', role: 'Chief Executive Officer\nRegistered Psychotherapist', photo: '../../public/images/team/bonita.jpg' },
    { name: 'Bera Ledua', role: 'Co-Founder', photo: '../../public/images/team/bera.jpg' },
    { name: 'Wes Carlisle', role: 'Director of\nAdministration', photo: '../../public/images/team/wes.jpg' },
    { name: 'Jeff Kirkpatrick', role: 'Administration\nDepartment Head', photo: '../../public/images/team/jeff.jpg' },
    { name: 'Alissa Darrow', role: 'Counselling\nDepartment Head\n\nRegistered Professional Counsellor / Registered Social Service Worker', photo: '../../public/images/team/Alissa.jpg' },
    { name: 'Justin Hiebert', role: 'Community Care\nDepartment Head\n\nThe Gathering Team Lead', photo: '../../public/images/team/Justin.jpg' },
    { name: 'Deanna Blanchard', role: 'Communication and Connections\nDepartment Head', photo: '../../public/images/team/Deanna.jpg' },
    { name: 'Karl Janzen', role: 'Ministry Partnership Coordinator', photo: '../../public/images/team/Karl.jpg' },
    { name: 'Julie McKenna', role: 'Registered\nPsychotherapist', photo: '../../public/images/team/Julie.jpg' },
    { name: 'Heather Le Quant', role: 'Registered Psychotherapist – Family Strengthening Program', photo: '../../public/images/team/Heather.jpg' },
    { name: 'Florence Tan', role: 'Registered Psychotherapist', photo: '../../public/images/team/Florence.jpg' },
    { name: 'Hannah Chun', role: 'Registered Psychotherapist', photo: '../../public/images/team/Hannah.jpg' },
    { name: 'Kyla Tempelman', role: 'Registered Psychotherapist', photo: '../../public/images/team/Kyla.jpg' },
    { name: 'Kelsey Hall', role: 'Psychotherapist\nIntern', photo: '../../public/images/team/Kelsey.jpg' },
    { name: 'Merline Desrameaux', role: 'Counsellor\nIntern', photo: '../../public/images/team/Merline.png' },
    { name: 'Sherrie-Lee Petrie', role: 'Registered\nSocial Worker', photo: '../../public/images/team/Sherrie-Lee.jpg' },
    { name: 'Jubin Abraham', role: 'Registered Social Worker', photo: '../../public/images/team/Jubin.jpg' },
    { name: 'Heide Nicholson', role: 'Registered Social Worker', photo: '../../public/images/team/Heide.jpg' },
    { name: 'Torika Ledua', role: 'Registered Social Worker (on leave)', photo: '../../public/images/team/Torika.jpg' },
    { name: 'Lauren Hartman', role: 'Registered Social Service Worker', photo: '../../public/images/team/Lauren.jpg' },
    { name: 'Gretchen Sarpiya', role: 'Executive Secretary', photo: '' },
    { name: 'Khandra Brown', role: 'Registered Social Service Worker (on leave)', photo: '../../public/images/team/Khandra.jpg' },
    { name: 'Anisha Alexander', role: 'Counselling Receptionist ', photo: '../../public/images/team/Anisha.jpg' },
    { name: 'Anna Sarpiya', role: 'Counselling Appointment Secretary', photo: '' },
    { name: 'Francisca Keelson', role: 'Counselling Administrative Assistant ', photo: '../../public/images/team/Francisca.jpg' },
    { name: 'Mercy Ayombile', role: 'Office Administrative Assistant – Next Steps ', photo: '' },
    { name: 'Ruhi Kruze', role: 'Family Strengthening Assistant  ', photo: '' },
    { name: 'Demerai Meekis', role: 'Food Services\nLead – The Gathering', photo: '../../public/images/team/Demerai.jpg' },
    { name: 'David Warner', role: 'Assistant – The Gathering', photo: '' },
    { name: 'Josiah Ledua', role: 'Information\nTechnology Lead ', photo: '' },
    { name: 'Abin Rajan', role: 'Maintenance Lead', photo: '../../public/images/team/Abin.jpg' },
    { name: 'Erika Weiher', role: 'Custodial Lead', photo: '../../public/images/team/Erika.png' },
    { name: 'Anton Avon Fernando', role: 'Facilities Staff', photo: '../../public/images/team/Anton.jpg' },
    { name: 'Carol Loney', role: 'Board Chair', photo: '../../public/images/team/Carol.jpg' },   
    { name: 'John Condon', role: 'Vice Chairman', photo: '../../public/images/team/John.png' },
    { name: 'Chief Harvey Yesno', role: 'Board Member', photo: '' },
    { name: 'Franz Seibel', role: 'Board Member', photo: ''},
    { name: 'Peggy Blekkenhorst', role: 'Treasurer', photo: '../../public/images/team/Peggy.png' },
    { name: 'John Andres', role: 'Board Member', photo: '../../public/images/team/JohnAndres.png' },
    { name: 'Rev. Milissa Ewing', role: 'Board Member', photo: '../../public/images/team/MilissaEwing.jpg' }
]

export default function Team() {
    return (
        <Box sx={{ py: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {team.map((member) => {
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
                                        //border: '3px solid #e0e0e0',
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
    )
}
