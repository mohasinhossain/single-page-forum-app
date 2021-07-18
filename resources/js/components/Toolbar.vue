<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>
        <router-link style="text-decoration: none;" to="/">Single Page Forum</router-link>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    <app-notification v-if="loggedIn"></app-notification>
    <div class="hidden-sm-and-down">

        <router-link
        v-for="item in showForLoggedIn"
        :key="item.title"
        :to="item.to">
        <v-btn flat>{{ item.title }}</v-btn>
        </router-link>

    </div>
  </v-toolbar>
</template>

<script>
import AppNotification from './AppNotification'
export default {
    components: {AppNotification},
    data(){
        return{
            loggedIn: User.loggedIn(),
            items: [
                {title : 'Forum', 'to': '/forum', show: true},
                {title : 'Ask Question', 'to': '/ask', show: User.loggedIn()},
                {title : 'Category', 'to': '/category', show: User.admin()},
                {title : 'Login', 'to': '/login', show: !User.loggedIn()},
                {title : 'Logout', 'to': '/logout', show: User.loggedIn()},
            ]
        }
    },
    computed: {
        showForLoggedIn(){
            return this.items.filter(item => item.show);
        },
    },
    created(){
        EventBus.$on('logout', ()=>{
            User.logOut()
        })
    }
}
</script>

<style scoped>

</style>
