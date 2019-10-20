<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
       <app-footer></app-footer>
    </div>
</template>


<script>
import Login from './login/Login'
import toolbar from './Toolbar'
import AppFooter from './AppFooter'
export default {
components:{toolbar, AppFooter, Login}
}
</script>

<style scoped>

</style>
