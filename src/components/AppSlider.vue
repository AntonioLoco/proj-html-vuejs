<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

export default{
    name: "AppSlider",
    props: {
        projects: Object,
        active: Number
    },
    components: {
        Swiper,
        SwiperSlide
    },  
    methods: {
        getImage(imagePath){
            return new URL(imagePath, import.meta.url).href
        }
    },
    setup(){
        return{
            modules: [Pagination],
        }
    }
}
</script>

<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
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
        <swiper-slide v-for="(project,index) in projects" :key="index">
            <div class="carousel-card"> 
                <img :src="getImage(`../assets/img/${project.img}.jpg`)" :alt="project.name">
                <div class="carousel-card-description">
                    <h3>{{project.name}}</h3>
                    <p>{{project.description}}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>



</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.carousel-card{
    display: inline-block;
    width: 300px;
    background-color: $background-white;
    border-radius: 20px;
    box-shadow: 5px 5px 11px 4px rgba(0,0,0,0.24);

    img{
        max-width: 100%;
        border-radius: 20px;
    }

    &-description{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.2em 1em;

        h3{
            font-size: 1rem;
            margin-bottom: 0;
        }

        p{
            font-size: .8rem;
            margin-bottom: 0;
        }
    }

    &:hover{
            background: $background-btn-orange;
            color: $text-white;
            transition: all .2s ease-in-out;
    }
}

.swiper{
    padding: 2em 0;
}
.swiper-slide{
    display: flex;
    justify-content: center;
}
</style>