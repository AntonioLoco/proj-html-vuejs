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
    },
    methods: {
        openMenu(){
            this.store.menuIsOpen = !this.store.menuIsOpen 
        }
    }
}
</script>

<template>
    <header id="home">
        <div class="container">
            <AppNavbar :links="store.navigationLinks" :isOpen="store.menuIsOpen" @openMenu="openMenu"/>
            <AppJumbotron />
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>