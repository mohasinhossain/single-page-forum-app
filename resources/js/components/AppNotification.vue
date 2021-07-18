<template>
        <div class="text-xs-center">
            <v-menu offset-y>
            <v-btn icon slot="activator">
                <v-icon :color="color">add_alert</v-icon> {{ unreadCount }}
            </v-btn>
            <v-list>
                <v-list-tile v-for="abc in unread" :key="abc.id">
                <router-link :to="abc.path">
                    <v-list-tile-title @click="markAsRead(abc)">{{ abc.title }}</v-list-tile-title>
                </router-link>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile v-for="item in read" :key="item.id">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-menu>
        </div>
</template>

<script>
export default {
    data(){
        return{
            read: {},
            unread: {},
            unreadCount: 0
        }
    },
    created() {
        if(User.loggedIn()){
            this.getNotifications()
        }

        Echo.private('App.User.' + User.id())
                .notification((notification) => {
                //console.log(notification.type);
                this.unread.unshift(notification)
                this.unreadCount++
            });
    },
    methods: {
        getNotifications(){
            axios.get('/api/notifications')
            .then(response => {
                 this.read = response.data.read
                 this.unread = response.data.unread
                 this.unreadCount = response.data.unread.length
            })
            .catch(error => Exception.handle(error))
        },
        markAsRead(abc){
            axios.get(`/api/markasread/${abc.id}`)
            .then(response => {
                this.unread.splice(abc, 1)
                this.read.push(abc)
                this.unreadCount--
            })
        }
    },
    computed: {
        color(){
            return this.unreadCount > 0 ? 'red' : 'red lighten-4'
        }
    }
}
</script>

<style scoped>

</style>
