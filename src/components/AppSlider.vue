<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import AppCardProject from "./AppCardProject.vue";

export default{
    name: "AppSlider",
    props: {
        projects: Object
    },
    components: {
    Swiper,
    SwiperSlide,
    AppCardProject
},  
    setup(){
        return{
            modules: [Pagination, Navigation],
        }
    }
}
</script>

<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :rewind="true" 
        :navigation="{
            nextEl: '.nextBtn',
            prevEl: '.prevBtn'
        }"
        :pagination="{
            clickable: true,
        }"
        :breakpoints="{
            '640': {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            '768': {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
            },
        }"
        :modules="modules"
        class="mySwiper"
    >
        <div class="mySwiper-navigation">
            <div class="prevBtn">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="nextBtn">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <swiper-slide v-for="(item,index) in projects" :key="index">
            <AppCardProject :project="item" v-motion-pop-visible-once />
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.mySwiper{
    overflow: visible;
    padding-top: 2rem;
    padding-bottom: 3rem;

    &-navigation{
        position: absolute;
        top: -40px;
        right: 10px;
        display: flex;

        .prevBtn,
        .nextBtn{
            margin: 0 .5rem;
            width: 35px;
            height: 35px;
            border: 1px solid $text-orange;
            color: $text-orange;
            border-radius: 50%;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
        }
    }

    .swiper-slide{
        display: flex;
        justify-content: center;
    }
}
</style>