<script>
// Import Component
import AppButton from './AppButton.vue';
import AppTitleSection from './AppTitleSection.vue';
import AppCardService from './AppCardService.vue';

import { store } from '../store';

export default{
    name: "AppServices",
    components: {
        AppCardService,
        AppButton,
        AppTitleSection
    },
    data(){
        return {
            store
        }
    },

}
</script>

<template>
    <!-- Section our services -->
    <section>
        <div class="container text-center py-5">
            <AppTitleSection 
                section="Our Services" 
                title="What We Do" 
                paragraph="When, while the lovely valley teems with vapour around meand the"
                color="black"
                class="pb-2"
            />

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 pb-5">
                <div 
                    class="col px-4 d-flex align-items-center justify-content-center" 
                    v-for="(service,index) in store.ourServices"
                    :key="index"
                >
                    <AppCardService :service="service" />
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
}
</style>