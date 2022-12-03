<script>
// Import Component
import AppButton from './AppButton.vue';

export default{
    name: "AppJumbotron",
    components: {
        AppButton
    }
}
</script>

<template>
    <!-- Jumbotron -->
    <div class="jumbotron">
        <div class="row row-cols-1 row-cols-lg-2 align-items-center pb-5">
            <div class="col order-1 order-lg-0 pe-5" 
            >
                <h1 class="fs-1 fw-bold">Business Planning</h1>
                <h3 class="fs-2 fw-semibold">Digital Technology</h3>
                <h2 class="fs-1 fw-bold">Modern Solution!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, reprehenderit!</p>
                <AppButton name="Try it Now" href="/trynow" color="orange" class="me-3"/>
                <AppButton name="Explore More" href="/exploremore" color="blue"/>
            </div>
            <div class="col order-0 order-lg-1 mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-end">
                <img src="../assets/img/header.png" alt="Jumbo photo">
            </div>
        </div>
    </div>
    <!-- /Jumbotron -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.jumbotron{
    p{
        width: 60%;
        font-size: .8rem;
        color: $text-blue;
        margin: 2em 0;
    }

    img{
        max-width: 90%;
    }
}
</style>