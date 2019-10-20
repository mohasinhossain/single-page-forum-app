
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './router/router.js'
const app = new Vue({
    el: '#app',
    router
});
