
require('./bootstrap');

window.Vue = require('vue');

// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)


import User from './helpers/user'
window.User = User

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './router/router.js'
import user from './helpers/user';
const app = new Vue({
    el: '#app',
    router
});
