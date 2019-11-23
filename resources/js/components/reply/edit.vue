<template>
    <div>
        <vue-simplemde ref="markdownEditor" v-model="reply.reply" />
        <div>
                <v-card-actions>
                    <v-btn icon small @click="update">
                        <v-icon color="green">save</v-icon>
                    </v-btn>
                    <v-btn icon small @click="cancel">
                        <v-icon color="black">cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
    </div>
</template>

<script>
  import VueSimplemde from 'vue-simplemde'
export default {
     props: ['reply'],
     components: {
      VueSimplemde
    },
    data(){
        return{
            body: null,
        }
    },
    methods: {
        // submit(){
        //     axios.post(`/api/${this.questionSlug}/reply`, {body: this.body})
        //     .then(response => {
        //         this.body = ''
        //         EventBus.$emit('newReply', response.data.reply)
        //         window.scrollTo(0,0)
        //     })
        // }
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
            .then(response => this.cancel())
        }
    }
}
</script>

<style scoped>

</style>
