// Central route configuration with optional nested subpages
import Home from './pages/Home/Home'
import WhoWeAre from './pages/WhoWeAre/WhoWeAre'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Counselling from './pages/WhatWeDo/Counselling'
import FSP from './pages/Programs/FSP'
import LifeBuild from './pages/WhatWeDo/LifeBuild'
import CookingForLife from './pages/Programs/CookingForLife'
import Compass from './pages/Programs/Compass'
import LearningCentre from './pages/Programs/LearningCentre'
import LandBase from './pages/WhatWeDo/LandBase'
import SpiritualGrowth from './pages/WhatWeDo/SpiritualGrowth'
import TeamMemberRedirect from './pages/WhoWeAre/TeamMemberRedirect'
import WhatWeDo from './pages/WhatWeDo'
import WhoWeServe from './pages/WhoWeServe'
import Programs from './pages/Programs/Programs'

import HomeOutlined from '@mui/icons-material/HomeOutlined'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import VolunteerActivism from '@mui/icons-material/VolunteerActivism'
import PsychologyOutlined from '@mui/icons-material/PsychologyOutlined'
import CategoryOutlined from '@mui/icons-material/CategoryOutlined'
import BuildCircleOutlined from '@mui/icons-material/BuildCircleOutlined'
import ParkOutlined from '@mui/icons-material/ParkOutlined'
import SelfImprovement from '@mui/icons-material/SelfImprovement'
import GroupOutlined from '@mui/icons-material/GroupOutlined'

const routes = [
    {
        path: '/',
        label: 'Home',
        component: Home,
        showInNav: false,
        icon: HomeOutlined,
    },
    {
        path: '/who-we-serve',
        label: 'Who We Serve',
        component: WhoWeServe,
        showInNav: true,
        icon: GroupOutlined,
        groupOnly: true,
        children: [
            { path: '/who-we-serve#northern-care', label: 'Northern Care', showInNav: false },
            { path: '/who-we-serve#street-care', label: 'Street Care', showInNav: false },
            {
                path: '/who-we-serve#community-care',
                label: 'Community Care',
                showInNav: false,
                children: [
                    {
                        path: '/programs/fsp',
                        label: 'Family Strengthening Program',
                        component: FSP,
                        showInNav: false,
                        icon: PsychologyOutlined,
                    },
                    {
                        path: '/programs/cooking-for-life',
                        label: 'Cooking For Life',
                        component: CookingForLife,
                        showInNav: false,
                        icon: BuildCircleOutlined,
                    },
                ],
            },
            { path: '/who-we-serve#prison-care', label: 'Prison Care', showInNav: false },
        ],
    },
    {
        path: '/what-we-do',
        label: 'What We Do',
        component: WhatWeDo,
        showInNav: true,
        icon: CategoryOutlined,
        groupOnly: true,
        children: [
            // Top-level page at /what-we-do
            {
                path: '/counselling',
                label: 'Counselling',
                component: Counselling,
                showInNav: false,
                icon: PsychologyOutlined,
                children: [
                    {
                        path: '/programs/fsp',
                        label: 'Family Strengthening Program',
                        component: FSP,
                        showInNav: false,
                        icon: PsychologyOutlined,
                    },
                ],
            },
            {
                path: '/lifebuild',
                label: 'LifeBuild',
                component: LifeBuild,
                showInNav: false,
                icon: BuildCircleOutlined,
                children: [
                    {
                        path: '/programs/cooking-for-life',
                        label: 'Cooking For Life',
                        component: CookingForLife,
                        showInNav: false,
                        icon: BuildCircleOutlined,
                    },
                ],
            },
            {
                path: '/landbase',
                label: 'Land Based',
                component: LandBase,
                showInNav: false,
                icon: ParkOutlined,
            },
            {
                path: '/spiritualgrowth',
                label: 'Spiritual Growth',
                component: SpiritualGrowth,
                showInNav: false,
                icon: SelfImprovement,
            },
        ],
    },
    {
        path: '/programs',
        label: 'Programs',
        component: Programs,
        showInNav: false,
        children: [
            {
                path: 'fsp',
                label: 'Family Strengthening Program',
                component: FSP,
                showInNav: false,
                icon: PsychologyOutlined,
            },
            {
                path: 'cooking-for-life',
                label: 'Cooking For Life',
                component: CookingForLife,
                showInNav: false,
                icon: BuildCircleOutlined,
            },
            {
                path: 'learning-centre',
                label: 'Learning Centre',
                component: LearningCentre,
                showInNav: false,
                icon: SelfImprovement,
            },
                {
                    path: 'compass',
                    label: 'Compass',
                    component: Compass,
                    showInNav: false,
                    icon: PsychologyOutlined,
                },
        ],
    },
    {
        path: '/who-we-are',
        label: 'Who We Are',
        component: WhoWeAre,
        showInNav: true,
        icon: InfoOutlined,
        groupOnly: true,
        children: [
            { path: '/who-we-are#mission', label: 'Our Mission' },
            { path: '/who-we-are#team', label: 'Our Team' },
            { path: '/who-we-are#history', label: 'Our History' },
        ],
    },
    {
        path: '/who-we-are/team/:slug',
        label: 'Team Member',
        component: TeamMemberRedirect,
        showInNav: false,
    },
    {
        path: '/donate',
        label: 'Donate',
        component: Donate,
        showInNav: true,
        highlight: true,
        icon: VolunteerActivism,
    },
    {
        path: '/contact',
        label: 'Contact',
        component: Contact,
        showInNav: false,
    },
    {
        path: '/privacy',
        label: 'Privacy Policy',
        component: Privacy,
        showInNav: false,
    },
    {
        path: '*',
        label: 'Not Found',
        component: NotFound,
        showInNav: false,
    },
]

export default routes
