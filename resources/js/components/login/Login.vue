<template>
    <v-container>
        <v-form @submit.prevent="login">
        <v-text-field
        v-model="form.email"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        required
        ></v-text-field>

        <v-btn color="green" type="submit">LOGIN</v-btn>

        <router-link to="/signup">
        <v-btn color="blue">SIGN UP</v-btn>
        </router-link>

        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            form:{
                email: null,
                password: null,
            }
        }
    },
    methods:{
        login(){
           User.login(this.form)
            this.$router.push({name: 'forum'})

        }
    }
}
</script>

<style scoped>

</style>
