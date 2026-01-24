// Central route configuration with optional nested subpages
import Home from './pages/Home'
import About from './pages/About'

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
]

export default routes
