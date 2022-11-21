<script>
export default{
    name: "AppCardService",
    props: {
        service: Object
    },
    methods: {
        getImage(imgPath){
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>

<template>

    <div class="card-service">
        <div class="card-service-photo">
            <img :src="getImage(`../assets/img/${service.img}.png`)" :alt="service.name">
        </div>
        <div class="card-service-text">
            <h3>{{service.name}}</h3>
            <p class="fw-light">{{service.description}}</p>
            <a href="" class="ms_btn">
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card-service{
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-photo{
        width: 50%;
        border-radius: 20px;
        padding: 1em;
        transform: translateY(30%);
        transition: all .5s ease-out;
        position: relative;
        z-index: 10;
        img{
            width: 100%;
            max-width: 150px;
            height: 100%;
            object-fit: contain;
        }
    }

    &-text{
        border-radius: 20px;
        padding: 3.5rem 1em 1em;
        position: relative;

        h3{
            font-size: 1.5rem;
            margin-bottom: 1em;
        }

        p{
            font-size: .8rem;
        }

        .ms_btn{
            display: none;
            width: 45px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            border-radius: 50%;
            background: $background-btn-orange;
            color: $text-white;
            position: absolute;
            bottom: -42px;
            left: 50%;
            transform: translate(-50%, -50%);
            &:hover{
                transition: all .5s ease-in-out;
            }
        }
    }

    &:hover .card-service-text{
        color: $text-white;
        background: $background-card-blog;
        transition: all .2s ease-out;
    }

    &:hover .card-service-photo{
        box-shadow: 6px 8px 16px 1px rgba(0,0,0,0.43);
        background-color: $background-white;
    }

    &:hover .card-service-text .ms_btn{
        display: inline-block;
        transition: all .2s ease-out;
    }
}
</style>