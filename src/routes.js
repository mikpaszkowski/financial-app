import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import History from './components/History.vue'
import AccountTransfer from './components/AccountTransfer.vue'
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import ModalAccountSettings from './components/modals/ModalAccountSettings.vue'

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
                component: Dashboard,

                children: [
                    {
                        path: 'edit',
                        component: ModalAccountSettings,
                    }
                ]
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