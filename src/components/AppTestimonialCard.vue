<script>
export default{
    name: "AppTestimonialCard",
    props: {
        testimonial: Object
    },
    methods: {
        getImagePath(imgUrl){
            return new URL(imgUrl, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="testimonial-card">
        <div class="testimonial-inner">
            <div class="testimonial-inner-photo">
                <img :src="getImagePath(`../assets/img/${testimonial.urlImg}.png`)" :alt="testimonial.fullName">
            </div>
            <div class="testimonial-inner-rating">
                <span class="stars" v-for="number in 5" :key="number">
                    <i class="fa-solid fa-star" v-if="testimonial.rating >= number"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
                <div class="background">
                    <i class="fa-solid fa-quote-left"></i>
                </div>
            </div>
            <div class="testimonial-inner-comment">
                <p>{{testimonial.comment}}</p>
            </div>
            <div class="testimonial-inner-description">
                <h2 class="fs-5 fw-bold">{{testimonial.fullName}}</h2>
                <h5 class="fs-6 fw-normal">{{testimonial.employment}}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.testimonial-card{
    padding: 1em 1.5em;
    .testimonial-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &-photo{
            max-width: 100px;
            border-radius: 50%;
            border: 5px solid $border-card-testimonial;
            margin-bottom: 1.5em;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-rating{
            padding-bottom: 1em;
            position: relative;
            color: $border-card-testimonial;

            .background{
                font-size: 100px;
                color: black;
                opacity: .1;

                i{
                    position: absolute;
                    top: -20px;
                    left: 0;
                }
            }
        }

        &-comment{
            padding-top: 2em;
            padding-bottom: 1em;
            font-size: 1rem;
        }
    }
}
</style>