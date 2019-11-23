<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.replied_by }}</div>
                <div class="ml-2">replied {{ data.replied_at }}</div>
            </v-card-title>
            <v-divider></v-divider>
            <edit-reply v-if="editing"
                        :reply="data"></edit-reply>
            <v-card-text v-else v-html="reply"></v-card-text>

            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small @click="edit">
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>
                    <v-btn icon small @click="destroy">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
import EditReply from './edit'

export default {
    props: ['data', 'index'],
    components: {EditReply},
    data(){
        return{
            editing: false,
            own: User.own(this.data.user_id)
        }
    },
    computed: {
        // own(){
        //     return User.own(this.data.user_id)
        // }
        reply(){
            return md.parse(this.data.reply)
        }
    },
    created() {
        this.listen()
    },
    methods:{
        destroy(){
            //console.log(this.index)
            EventBus.$emit('deleteReply', this.index)
        },
        edit(){
            this.editing = true
            //EventBus.$emit('deleteReply', this.index)
        },
        listen(){
             EventBus.$on('cancelEditing', ()=>{
                this.editing = false
            })
        }
    }
}
</script>

<style scoped>

</style>
