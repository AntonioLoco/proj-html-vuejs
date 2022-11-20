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
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card-service{
    width: 100%;
    height: 100%;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;

    &-photo{
        height: 40%;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &-text{
        height: 60%;
        padding-top: 1.5em;
        padding-bottom: 1em;
        h3{
            font-size: 1.5rem;
            margin-bottom: 1em;
        }

        p{
            font-size: .8rem;
        }
    }
}
</style>