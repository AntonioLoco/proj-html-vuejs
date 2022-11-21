<script>
//Import Component
import AppCardPrice from './AppCardPrice.vue';
import AppTitleSection from './AppTitleSection.vue';

//Import Store
import { store } from '../store';
export default{
    name: "AppPriceList",
    components: {
        AppCardPrice,
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
    <!-- Section Price list -->
    <section id="about">
        <div class="container py-5">
            <AppTitleSection 
                section="Price List"
                title="Our Pricing"
                paragraph="When, while the lovely valley teems with vapour around meand the"
                color="white"
                class="text-center"
            />

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
}
</style>