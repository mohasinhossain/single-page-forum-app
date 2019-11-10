<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question v-for="question in questions"
        :key="question.path"
        :data=question
        ></question>
      </v-flex>

      <!-- <v-flex xs4>
        <h3>Sidebar</h3>
      </v-flex> -->
    sidebar
    </v-layout>
  </v-container>
</template>

<script>
import Question from './Question'
export default {
    data(){
        return{
            questions: {}
        }
    },
    components: {Question},
    created() {
        //console.log("fafaf");
        axios.get('/api/question')
            .then(response => this.questions = response.data.data)
            .catch(error => console.log(error.response.data))
    },
}
</script>

<style scoped>

</style>
