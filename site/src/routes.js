// Central route configuration with optional nested subpages
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'

const routes = [
    {
        path: '/',
        label: 'Home',
        component: Home,
        showInNav: false,
    },
    {
        path: '/about',
        label: 'About',
        component: About,
        showInNav: true,
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
    },
]

export default routes
