<script>
import AppSlider from './AppSlider.vue';
import AppTitleSection from './AppTitleSection.vue';
import { store } from '../store';

export default{
    name: "AppPortfolio",
    components: {
        AppSlider,
        AppTitleSection
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
            <AppTitleSection 
                section="Portfolio"
                title="Latest work"
                color="black"
            />
        </div>
        <div class="container-xxl">
            <AppSlider :projects="store.projectList"/>
        </div>
    </section>
    <!-- /Portfolio -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    overflow-x: hidden;
    padding-bottom: 5em;
    background-color: $background-light-grey;
}
</style>