<template>
    <v-container>
        <v-form @submit.prevent="submit">
        <v-text-field
        v-model="form.name"
        label="Category Name"
        required
        ></v-text-field>

        <v-btn color="orange" type="submit" v-if="editSlug">Update Category</v-btn>
        <v-btn color="green" type="submit" v-else>Create New Category</v-btn>

        </v-form>

        <v-card class="mt-5">
        <v-toolbar color="cyan" dark dense class="mt-2">
          <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <div v-for="(category, index) in categories" :key="category.id">
                <v-list-tile >
                    <v-list-tile-action>
                        <v-btn icon small @click="edit(index)">
                            <v-icon color="orange">edit</v-icon>
                        </v-btn>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ category.name }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon small @click.prevent="destroy(category.slug, index)">
                            <v-icon color="red">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </div>
        </v-list>

    </v-card>
    </v-container>
</template>

<script>

export default {
    data(){
        return{
            form:{
                name: null,
            },
            categories: {},
            errors: {},
            editSlug: null,
        }
    },
    created(){
            axios.get('/api/category')
            .then(response => this.categories = response.data.data)
            .catch(error => console.log(error.response.data))
    },
    methods:{
        submit(){
            this.editSlug ? this.update() : this.create()
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
            .then(response =>  {
                this.categories.unshift(response.data)
                this.form.name = null
                })
        },
        create(){
            axios.post('/api/category', this.form)
            .then(response =>  {
                this.categories.unshift(response.data)
                this.form.name = null
                })
            },
        edit(index){
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
            this.categories.splice(index,1)
            },
        destroy(slug, index){
            axios.delete(`/api/category/${slug}`)
            .then(response => this.categories.splice(index,1))
            .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style scoped>

</style>
