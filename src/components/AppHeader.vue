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
            store,
        }
    },
    methods: {
        toggleMenu(){
            if(this.store.menuIsOpen){
                this.closeMenu();
            } else {
                this.openMenu();
            }
        },
        openMenu(){
            this.store.menuIsOpen = true
            document.body.classList.add("overflow-hidden")
        },
        closeMenu(){
            this.store.menuIsOpen = false
            document.body.classList.remove("overflow-hidden")
        }
    }
}
</script>

<template>
    <header id="home">
        <div class="container-lg">
            <AppNavbar :links="store.navigationLinks" :isOpen="store.menuIsOpen" @toggleMenu="toggleMenu" @linkClicked="closeMenu"/>
        </div>
        <div class="container">
            <AppJumbotron />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    position: relative;
    z-index: 800;
    .container-lg{
        padding: 0;
        position: relative;
    }
}
</style>