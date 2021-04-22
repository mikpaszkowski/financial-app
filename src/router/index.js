import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/LogIn.vue";
import Home from "../components/Home.vue";
import UserProfile from "../components/UserProfile.vue";
import History from "../components/History.vue";
import Transaction from "../components/Transaction.vue";
import LandingPage from "../components/LandingPage.vue";
import SignUp from "../components/SignUp.vue";
import NotFound from "../views/NotFound.vue";
import HomeNewsContainer from "../components/HomeNewsContainer.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    },

    children: [
      {
        path: "account",
        name: "Account",
        component: UserProfile
      },
      {
        path: "history",
        name: "History",
        component: History
      },
      {
        path: "transfer",
        name: "Transaction",
        component: Transaction
      },
      {
        path: "news",
        name: "News",
        component: HomeNewsContainer
      }
    ]
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !store.getters["user/isLoggedIn"]) {
//     return {
//       path: "/login",
//       query: { redirect: to.fullPath }
//     };
//   }
// });

export default router;
