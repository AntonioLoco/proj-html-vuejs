<script>
import AppTitleSection from './AppTitleSection.vue';
import AppTestimonialCard from './AppTestimonialCard.vue';

import { store } from '../store';

export default{
    name: "AppTestimonials",
    data(){
        return{
            store
        }
    },
    components:{
        AppTitleSection,
        AppTestimonialCard
    }
}
</script>

<template>
    <!-- Section Testimonials -->
    <section>
        <div class="container pt-5">
            <AppTitleSection 
                section="Testimonial"
                title="What People Say"
                paragraph="When, while the lovely valley teems with vapour around meand the"
                color="black"
                class="text-center"
            />

            <div class="row row-cols-1 row-cols-lg-3 pt-5">
                <div 
                    class="col mb-5 mb-lg-0"
                    v-for="(testimonial, index) in store.testimonialList"
                    :key="index"
                >
                    <AppTestimonialCard :testimonial="testimonial"/>
                </div>
            </div>
        </div>
    </section>
    <!-- /Section Testimonials -->

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background-color: $background-light-grey;
}
</style>