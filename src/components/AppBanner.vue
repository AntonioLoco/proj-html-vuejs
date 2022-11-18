<script>
// Import Component
import AppButton from './AppButton.vue';

export default{
    name: "AppBanner",
    components: {
        AppButton
    }
}
</script>

<template>
    <!-- Banner -->
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 align-items-center pb-5">
                <div class="col mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start">
                    <img src="../assets/img/men-data.png" alt="Banner photo">
                </div>
                <div class="col pe-5">
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

    .container{
        padding: 4em 0;
    
        img{
            max-width: 70%;
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