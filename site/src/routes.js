// Central route configuration with optional nested subpages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Counselling from './pages/Counselling'
import WhatWeDo from './pages/WhatWeDo'
import LifeBuild from './pages/LifeBuild'

import HomeOutlined from '@mui/icons-material/HomeOutlined'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import VolunteerActivism from '@mui/icons-material/VolunteerActivism'
import PsychologyOutlined from '@mui/icons-material/PsychologyOutlined'
import CategoryOutlined from '@mui/icons-material/CategoryOutlined'
import BuildCircleOutlined from '@mui/icons-material/BuildCircleOutlined'

const routes = [
    {
        path: '/',
        label: 'Home',
        component: Home,
        showInNav: false,
        icon: HomeOutlined,
    },
    {
        path: '/about',
        label: 'About Us',
        component: About,
        showInNav: true,
        icon: InfoOutlined,
        children: [
        // Example subpage (enable later):
        // { path: 'team', label: 'Team', component: Team, showInNav: false }
        ],
    },
    {
        path: '/what-we-do',
        label: 'What We Do',
        component: WhatWeDo,
        showInNav: true,
        icon: CategoryOutlined,
        children: [
            {
                path: 'counselling',
                label: 'Counselling',
                component: Counselling,
                showInNav: false,
                icon: PsychologyOutlined,
            },
            {
                path: 'lifebuild',
                label: 'LifeBuild',
                component: LifeBuild,
                showInNav: false,
                icon: BuildCircleOutlined,
            },
        ],
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
