
require('./bootstrap');

window.Vue = require('vue');

// src/plugins/vuetify.js

//Vuetify
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

//Vue simplemde
import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)

import md from 'marked';
window.md = md

//Helper class
import User from './helpers/user'
window.User = User

//Vue EventBus
window.EventBus = new Vue();

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './router/router.js'
import user from './helpers/user';
const app = new Vue({
    el: '#app',
    router
});
