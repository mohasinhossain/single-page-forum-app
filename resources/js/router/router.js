import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import SignUp from '../components/login/SignUp'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/Read'
import CreateQuestion from '../components/forum/CreateQuestion'
import CreateCategory from '../components/category/Create'


const routes = [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/ask', component: CreateQuestion, name: 'create' },
    { path: '/question/:slug', component: Read, name: 'read' },

    { path: '/category', component: CreateCategory },

]

const router = new VueRouter({
    routes,
    //hashbang: false,
    mode: 'history'
})

export default router