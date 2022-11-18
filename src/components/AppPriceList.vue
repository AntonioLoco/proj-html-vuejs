<script>
//Import Component
import AppCardPrice from './AppCardPrice.vue';

//Import Store
import { store } from '../store';
export default{
    name: "AppPriceList",
    components: {
        AppCardPrice
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- Section Price list -->
    <section>
        <div class="container py-5">
            <div class="title-section">
                <h5 class="fs-6 fw-normal">Price List</h5>
                <h2 class="fs-1 fw-bold">Our <span class="fw-normal">Pricing</span></h2>
                <h4 class="fs-5 fw-light">When, while the lovely valley teems with vapour around meand the</h4>
            </div>

            <div class="row row-cols-1 row-cols-lg-3 py-5">
                <div class="col d-flex align-items-center justify-content-center d-lg-block mb-5 mb-lg-0" v-for="(product, index) in store.productList" :key="index">
                    <AppCardPrice :product="product" :color="(index % 2) === 0 ? 'white' : 'orange'"/>
                </div>
            </div>

        </div>
    </section>
    <!-- Section Price list -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background: $background-pricing-section;
    color: $text-white;
    .title-section{
        text-align: center;
    
        h5{
            color: $text-orange;
        }
    }
}
</style>