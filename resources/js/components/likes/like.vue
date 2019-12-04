<template>
    <div>
       <v-btn icon @click="likedIt">
           <v-icon :color="color">favorite</v-icon> {{ count }}
       </v-btn>
    </div>
</template>

<script>
export default {
    props: ['content'],
    data(){
        return{
            liked: this.content.liked,
            count: this.content.total_like
        }
    },
    created() {
        Echo.channel('LikeChannel')
        .listen('LikeEvent', (e) => {
            if(this.content.id == e.id){
                e.type == 1 ? this.count++ : this.count--
            }
        });
    },
    computed:{
        color(){
            return this.liked ? 'red' : 'red lighten-4';
        }
    },
    methods: {
        likedIt(){
            if(User.loggedIn()){
                this.liked ? this.decr() : this.incr();
                this.liked = !this.liked;
            }
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
            .then(response => this.count ++)
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
            .then(response => this.count --)
        }
    }
}
</script>

<style scoped>

</style>
