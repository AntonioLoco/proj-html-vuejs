<script>
import AppLinks from './AppLinks.vue';
import { store } from '../store';

export default{
    name: "AppFooterTop",
    components: {
        AppLinks
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- Section Footer Links -->
    <section>
        <div class="container">
            <div class="row row-cols-2 row-cols-lg-4">
                <div class="col">
                    <img src="../assets/img/white-logo-2.png" alt="Logo">
                    <p class="mt-5">When, while lovely valley teems with vapour around meand meridian sun strikes the upper</p>
                </div>
                <div class="col">
                    <h4 class="text-light fs-5 mt-3">Quick Links</h4>
                    <ul>
                        <li class="mb-2" v-for="(link,index) in store.navigationLinks" :key="index"><a :href="link.href">{{link.name}}</a></li>
                    </ul>
                </div>
                <div class="col" v-for="(section,index) in store.footerLinks" :key="index">
                    <AppLinks :links="section"/>
                </div>
            </div>
        </div>
    </section>
    <!-- Section Footer Links -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    border-bottom: .1px solid rgba(184, 184, 184, 0.2);

    .container{
        padding-top: 13rem;
        padding-bottom: 2rem;
        color: $text-grey;
    }
}
</style>