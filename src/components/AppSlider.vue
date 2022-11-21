<script>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

export default{
    name: "AppSlider",
    props: {
        projects: Object
    },
    components: {
        SplitCarousel,
        SplitCarouselItem
    },  
    methods: {
        getImage(imagePath){
            return new URL(imagePath, import.meta.url).href
        }
    }
}
</script>

<template>
    <split-carousel>
        <split-carousel-item v-for="(project,index) in projects" :key="index">
            <a :href="project.href" class="project-card"> 
                <img :src="getImage(`../assets/img/${project.img}.jpg`)" :alt="project.name">
                <div class="project-card-description">
                    <h3>{{project.name}}</h3>
                    <p>{{project.description}}</p>
                </div>
            </a>
        </split-carousel-item>
    </split-carousel>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.split-carousel{
    margin-top: 3em;
    height: 300px!important;
    position: relative;
    cursor: pointer;
    
    &__item{
        width: 345px!important;
        padding: 0 2em;

        .project-card{
            display: block;
            width: 100%;
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
    }

    &__left,
    &__right {
        align-self: center;
        padding: 50px;
    }
}
</style>