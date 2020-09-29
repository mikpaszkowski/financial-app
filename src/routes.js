import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import AccountData from './components/AccountData.vue'
import HomeWelcome from './components/HomeWelcome.vue'
import History from './components/History.vue'
import AccountTransfer from './components/AccountTransfer.vue'
import HomePage from './components/HomePage.vue'

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/login',
        component: LogIn, 
    },
    {
        path: '/home',
        component: Home,

        children: [
            {
                path: 'account',
                component: AccountData,
            },
            {
                path: '/',
                component: HomeWelcome,
            },
            {
                path: 'history',
                component: History,
            },
            {
                path: 'transfer',
                component: AccountTransfer,
            }
        ]
    }, 
]