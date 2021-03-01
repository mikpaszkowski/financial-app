import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/LogIn.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import History from "../components/History.vue";
import AccountTransfer from "../components/AccountTransfer.vue";
import HomePage from "../components/HomePage.vue";
import SignUp from "../components/SignUp.vue";
import ModalAccountSettings from "../components/modals/ModalAccountSettings.vue";

const routes = [
  {
    path: "",
    component: HomePage,

    children: [
      {
        path: "login",
        component: LogIn,
      },
      {
        path: "signup",
        component: SignUp,
      }
    ]
  },
  {
    path: "/home",
    component: Home,

    children: [
      {
        path: "account",
        component: Dashboard,

        children: [
          {
            path: "edit",
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
    //   path: "/",
    //   name: "Home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: history
});

export default router;
