<script>
import AppSlider from './AppSlider.vue';
import { store } from '../store';

export default{
    name: "AppPortfolio",
    components: {
        AppSlider
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- Portfolio -->
    <section>
        <div class="container pt-5">
            <h5 class="fs-6 fw-normal">Portfolio</h5>
            <h2>Latest <span class="fw-light">work</span></h2>
        </div>
        <AppSlider :projects="store.projectList"/>
    </section>
    <!-- /Portfolio -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    overflow-x: hidden;
    padding-bottom: 5em;
    background-color: $background-light-grey;
    .container{
        h5{
            color: $text-orange
        }
    }
}
</style>