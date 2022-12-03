<script>
// Import Component
import AppButton from './AppButton.vue';

export default{
    name: "AppBanner",
    components: {
        AppButton,
    }
}
</script>

<template>
    <!-- Banner -->
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center justify-content-lg-between pb-5">
                <div class="col mb-3 mb-lg-0 position-relative card-image" v-motion-roll-visible-once-left>
                    <img src="../assets/img/men-data.png" alt="Banner photo" id="front-image">
                    <img src="../assets/img/nemoodar.png" alt="Back Photo" id="back-image">
                </div>
                <div class="col pe-5" v-motion-roll-visible-once-right>
                    <h5 class="fs-6 fw-light">Start your Project</h5>
                    <h1 class="fs-1 fw-bold">Grow Your Business</h1>
                    <h3 class="fs-1 fw-semibold">With Our Strategy</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, reprehenderit!</p>
                    <AppButton name="Try it Now" href="/trynow" color="orange" class="me-3"/>
                    <AppButton name="Explore More" href="/exploremore" color="blue"/>
                </div>
            </div>
        </div>
    </section>
    <!-- /Banner -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background: $background-header;
    color: $text-white;

    .card-image{
        max-width: 350px;
    }
    .container{
        padding-top: 5rem;
        padding-bottom: 3rem;

        #front-image{
            position: relative;
            z-index: 10;
        }
        #back-image{
            position: absolute;
            top: -50px;
            left: 0;
        }

        p{
            width: 60%;
            font-size: .8rem;
            color: $text-blue;
            margin: 2em 0;
        }
    }
}
</style>