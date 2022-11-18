<script>
import AppButton from './AppButton.vue';

export default{
    name: "AppCardPrice",
    props: {
        product: Object,
        color: String
    },
    components: {
        AppButton
    },
    computed: {
        getColorButton(){
            return this.color === "orange" ? "white" : "orange"
        }
    }
}
</script>

<template>
    <div class="card-pricing" :class="color">
        <div class="title mb-3">
            <h2 class="fs-3 fw-semibold">{{product.name}}</h2>
            <h4 class=" fw-normal">{{product.type.toUpperCase()}}</h4>
        </div>
        <div class="price mb-3">
            <h2 class="fw-bold pt-2"><span class="fw-semibold">$</span>{{product.price}}</h2>
            <p class="fs-6 fw-ligth">Per Month</p>
        </div>
        <div class="description">
            <ul>
                <li v-for="(item,index) in product.descriptionList" :key="index">
                    <h3 class="fs-6">{{item.title}} <span class="fw-normal">{{item.description}}</span></h3>
                </li>
            </ul>
        </div>
        <div class="background">
            <span>{{product.price}}</span>
        </div>
        <AppButton name="Order Now &#8594" href="/ordernow" :color="getColorButton" class="mb-2"/>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card-pricing{
    min-height: 400px;
    min-width: 300px;
    max-width: 380px;
    text-align: center;
    padding: 1.5em;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 5px 21px 0px rgba(0,0,0,0.48);
    &.white{
        background-color: $background-light-grey;
        color: $text-black;
    }
    &.orange{
        background: $background-card-orange;
        color: $text-white;
    }

    .title{
        position: relative;
        z-index: 10;

        h4{
            font-size: .8rem;
        }
    }
    .price{
        position: relative;
        z-index: 10;
        h2{
            font-size: 4rem;
            position: relative;

            span{
                font-size: 1rem;
                position: absolute;
                top: 0;
                left: 30%;
            }
        }
    }

    .description{
        padding: .8em 0;

        li{
            margin: .5em 0;
        }
    }

    .background{
        position: absolute;
        top: -95px;
        right: -5px;
        font-weight: bold;
        font-size: 200px;
        color: #d4d4d4;
        opacity: .3;
        span{
            z-index: 0;
        }
    }
}
</style>