<template>
  <v-jumbotron color="primary" dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the real SPA forum discussion</h3>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">
              <router-link to="/forum" style="text-decoration:none; color: #fff;">
Check out newest threads!
              </router-link>
              
              </div>

          <v-btn
            v-if="! loggedIn"
            class="mx-0"
            color="primary"
            large
          >
          <router-link  to="/login" style="text-decoration:none; color: #fff;">Login to ask any question</router-link>
          </v-btn>      

        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
    computed:{
        loggedIn(){
            return User.loggedIn()
        }
    },
}
</script>

<style scoped></style>
