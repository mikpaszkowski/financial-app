import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import AccountData from './components/AccountData.vue'
import HomeWelcome from './components/HomeWelcome.vue'
import History from './components/History.vue'
import AccountTransfer from './components/AccountTransfer.vue'
import HomePage from './components/HomePage.vue'
<<<<<<< HEAD
=======
import SignIn from './components/SignIn.vue'
>>>>>>> 2fe219bd701fa7c1573477fd5a913e9be11f4135

export default [
    {
        path: '/',
        component: HomePage,
<<<<<<< HEAD
=======

        children: [
            {
                path: 'login',
                component: LogIn,
            },
            {
                path: 'signin',
                component: SignIn,
            }
        ]
>>>>>>> 2fe219bd701fa7c1573477fd5a913e9be11f4135
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