<script>
import { store } from '../store';

export default{
    name: "AppAdvertising",
    data(){
        return{
            store
        }
    },
    methods: {
        getImagePath(imgUrl){
            return new URL(imgUrl, import.meta.url).href
        }
    }
}
</script>

<template>
<!-- Section Advertising -->
<section>
    <div class="container py-3">
        <div class="row row-cols-1 row-cols-lg-5">
            <div 
                class="col mb-5 mb-lg-0"
                v-for="(society,index) in store.AdvertisingList"
                :key="index"
            >
                <img :src="getImagePath(`../assets/img/${society.imgUrl}.png`)" :alt="society.name">
            </div>
        </div>
    </div>
</section>
<!-- /Section Advertising -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background-color: $background-light-grey;
    .col{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            max-width: 70%;
        }
    }
}
</style>