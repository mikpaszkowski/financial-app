import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import AccountData from './components/AccountData.vue'
import History from './components/History.vue'
import AccountTransfer from './components/AccountTransfer.vue'
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'

export default [
    {
        path: '',
        component: HomePage,

        children: [
            {
                path: 'login',
                component: LogIn,
            },
            {
                path: 'signup',
                component: SignUp,
            }
        ]
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