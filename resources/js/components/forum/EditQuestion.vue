<template>
    <v-container>
        <v-card>
            <v-form @submit.prevent="update">
            <v-text-field
            v-model="form.title"
            label="Question Title"
            required
            ></v-text-field>

            <vue-simplemde ref="markdownEditor" v-model="form.body" />

            <v-card-actions>
                    <v-btn icon small type="submit">
                        <v-icon color="teal">save</v-icon>
                    </v-btn>
                    <v-btn icon small @click="cancel">
                        <v-icon>cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'

export default {
     components: {
      VueSimplemde
    },
    props: ['data'],
    data(){
        return{
            form:{
                title: null,
                body: null,
            },
            errors: {}
        }
    },
    created(){
        this.form = this.data
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update(){
            //alert("ghfgf");
             axios.patch(`/api/question/${this.form.slug}`, this.form)
             .then(response => this.cancel())
             }
    }
}
</script>

<style scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>
