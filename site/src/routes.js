// Central route configuration with optional nested subpages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Counselling from './pages/Counselling'
import FSP from './pages/Programs/FSP'
import LifeBuild from './pages/LifeBuild'
import CookingForLife from './pages/Programs/CookingForLife'
import LandBase from './pages/LandBase'
import SpiritualGrowth from './pages/SpiritualGrowth'
import TeamMemberRedirect from './pages/About/TeamMemberRedirect'
import WhoWeServe from './pages/WhoWeServe'
import NorthernCare from './pages/WhoWeServe/NorthernCare'
import StreetCare from './pages/WhoWeServe/StreetCare'
import CommunityCare from './pages/WhoWeServe/CommunityCare'
import PersonalCare from './pages/WhoWeServe/PersonalCare'

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
        label: 'What We Do',
        showInNav: true,
        icon: CategoryOutlined,
        groupOnly: true,
        children: [
            {
                path: '/counselling',
                label: 'Counselling',
                component: Counselling,
                showInNav: false,
                icon: PsychologyOutlined,
                children: [
                    {
                        path: 'fsp',
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
                        path: 'cooking-for-life',
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
        label: 'Who We Serve',
        showInNav: true,
        icon: GroupOutlined,
        groupOnly: true,
        children: [
            {
                path: '/who-we-serve',
                label: 'Overview',
                component: WhoWeServe,
                showInNav: false,
            },
            {
                path: '/northern-care',
                label: 'Northern Care',
                component: NorthernCare,
                showInNav: false,
            },
            {
                path: '/street-care',
                label: 'Street Care',
                component: StreetCare,
                showInNav: false,
            },
            {
                path: '/community-care',
                label: 'Community Care',
                component: CommunityCare,
                showInNav: false,
                children: [
                    {
                        path: 'cooking-for-life',
                        label: 'Cooking For Life',
                        component: CookingForLife,
                        showInNav: false,
                    },
                ],
            },
            {
                path: '/personal-care',
                label: 'Personal Care',
                component: PersonalCare,
                showInNav: false,
                children: [
                    {
                        path: 'fsp',
                        label: 'Family Strengthening Program',
                        component: FSP,
                        showInNav: false,
                    },
                ],
            },
        ],
    },
    {
        path: '/about',
        label: 'Who We Are',
        component: About,
        showInNav: true,
        icon: InfoOutlined,
        groupOnly: true,
        children: [
            { path: '/about#mission', label: 'Our Mission' },
            { path: '/about#team', label: 'Our Team' },
            { path: '/about#history', label: 'Our History' },
        ],
    },
    {
        path: '/about/team/:slug',
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
