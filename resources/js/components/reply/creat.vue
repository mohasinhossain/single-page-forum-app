<template>
<div>
    <vue-simplemde ref="markdownEditor" v-model="body" />
    <v-btn color="green" @click="submit">
        Reply
    </v-btn>
</div>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
export default {
    props: ['questionSlug'],
     components: {
      VueSimplemde
    },
    data(){
        return{
            body: null,
        }
    },
    methods: {
        submit(){
            axios.post(`/api/${this.questionSlug}/reply`, {body: this.body})
            .then(response => {
                this.body = ''
                EventBus.$emit('newReply', response.data.reply)
                window.scrollTo(0,0)
            })
        }
    }
}
</script>

<style scoped>

</style>
