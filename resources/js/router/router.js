import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SignUp from '../components/login/SignUp'
import Login from '../components/login/Login'
import Forum from '../components/forum/Forum'

const routes = [
    { path: '/signup', component: SignUp },
    { path: '/login', component: Login },
    { path: '/forum', component: Forum, name: 'forum'},
  ]

  const router = new VueRouter({
    routes,
    //hashbang: false,
    mode: 'history'
  })

  export default router
