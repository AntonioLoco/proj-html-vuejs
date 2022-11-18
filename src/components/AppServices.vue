<script>
// Import Component
import AppButton from './AppButton.vue';

import { store } from '../store';

export default{
    name: "AppServices",
    components: {
        AppButton
    },
    data(){
        return {
            store
        }
    },
    methods: {
        getImage(imgPath){
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>

<template>
    <!-- Section our services -->
    <section>
        <div class="container text-center py-5">
            <div class="pb-5">
                <h5 class="fs-6 fw-normal">Our Services</h5>
                <h2 class="fs-1 fw-bold">What <span class="fw-normal">We Do</span></h2>
                <h4 class="fs-5 fw-light">When, while the lovely valley teems with vapour around meand the</h4>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-5">
                <div 
                    class="col"
                    v-for="(service,index) in store.ourServices"
                    :key="index"
                    >
                    <div class="col-photo">
                        <img :src="getImage(`../assets/img/${service.img}.png`)" :alt="service.name">
                    </div>
                    <div class="col-text">
                        <h3>{{service.name}}</h3>
                        <p class="fw-light">{{service.description}}</p>
                    </div>
                </div>
            </div>
            <AppButton name="View All Services" href="/allservices" color="orange"/>
        </div>
    </section>
    <!-- Section our services -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background-color: $background-light-grey;
    .container{
        h5{
            color: $text-orange;
        }
    
        .col{
            padding: 0 3em;
            margin-bottom: 2em;
            display: flex;
            flex-direction: column;
    
            &-photo{
                height: 40%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
    
            &-text{
                height: 60%;
                padding-top: 1.5em;
                padding-bottom: 1em;
                h3{
                    font-size: 1.5rem;
                    margin-bottom: 1em;
                }
    
                p{
                    font-size: .8rem;
                }
            }
        }
    }
}
</style>