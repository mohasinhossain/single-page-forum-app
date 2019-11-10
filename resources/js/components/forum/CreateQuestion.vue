<template>
    <v-container>
        <v-form @submit.prevent="create">
        <v-text-field
        v-model="form.title"
        label="Question Title"
        required
        ></v-text-field>

        <v-autocomplete
          :items="categories"
          item-text="name"
          item-value="id"
          v-model="form.category_id"
          label="Select a category"
        ></v-autocomplete>

        <vue-simplemde ref="markdownEditor" v-model="form.body" />

        <v-btn color="green" type="submit">Create New Question</v-btn>
        </v-form>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'

export default {
     components: {
      VueSimplemde
    },
    data(){
        return{
            form:{
                title: null,
                category_id: null,
                body: null,
            },
            categories: {},
            errors: {}
        }
    },
    created(){
            axios.get('/api/category')
            .then(response => this.categories = response.data.data)
            .catch(error => console.log(error.response.data))
    },
    methods:{
        create(){
            axios.post('/api/question', this.form)
            .then(response =>  this.$router.push(response.data.path))
            .catch(error => this.errors = error.response.data)
        }
    }
}
</script>

<style scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>
