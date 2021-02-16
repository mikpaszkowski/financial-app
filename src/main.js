import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import TheHeading from './components/TheHeading.vue'
import TheSideBar from './components/TheSideBar.vue'
import AccountData from './components/AccountData.vue'
import LogIn from './components/LogIn.vue'
import History from './components/History.vue'
import AccountTransfer from './components/AccountTransfer.vue'
import HomePage from './components/HomePage.vue'
import Routes from './routes'
import Store from './store/personalDataStore'


Vue.component('app-heading', TheHeading)
Vue.component('app-side-bar', TheSideBar)
Vue.component('app-account-data', AccountData)
Vue.component('app-history', History)
Vue.component('app-transfer', AccountTransfer)
Vue.component('login', LogIn)

Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: Store,
})
