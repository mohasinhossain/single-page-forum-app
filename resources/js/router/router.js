import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SignUp from '../components/login/SignUp'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/Read'
import Create from '../components/forum/CreateQuestion'

const routes = [
    { path: '/signup', component: SignUp },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/forum', component: Forum, name: 'forum'},
    { path: '/ask', component: Create, name: 'create'},
    { path: '/question/:slug', component: Read, name: 'read'},
  ]

  const router = new VueRouter({
    routes,
    //hashbang: false,
    mode: 'history'
  })

  export default router
