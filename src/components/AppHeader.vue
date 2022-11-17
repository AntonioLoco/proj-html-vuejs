<script>
//Import Components
import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';

//Import Store
import { store } from "../store";

export default{
    name: "AppHeader",
    components: {
        AppNavbar,
        AppJumbotron
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <AppNavbar :links="store.navigationLinks"/>
            <AppJumbotron />
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>