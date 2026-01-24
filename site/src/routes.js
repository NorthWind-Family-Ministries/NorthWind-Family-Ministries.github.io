// Central route configuration with optional nested subpages
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import VolunteerActivism from '@mui/icons-material/VolunteerActivism'

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
        label: 'About',
        component: About,
        showInNav: true,
        icon: InfoOutlined,
        children: [
        // Example subpage (enable later):
        // { path: 'team', label: 'Team', component: Team, showInNav: false }
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
]

export default routes
