<script>
export default{
    name: "AppButton",
    props: {
        name: String,
        href: String,
        color: String,
        textColor: String
    }
}
</script>

<template>
    <a
    class="ms_btn"
    :href="href" 
    :class="color, textColor"
    >
        {{name}}
    </a>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_btn{
    display: inline-block;
    color: $text-white;
    padding: .5em 1.5em;
    border-radius: 20px;
    text-align: center;
    transition: transform .5s ease-out;

    &.blue{
        background: $background-btn-blue;
    }

    &.orange{
        background: $background-btn-orange;
    }

    &.white{
        background-color: $background-white!important;
        color: $text-orange;
    }

    &.white.black{
        background-color: $background-white;
        color: $text-black;
    }

    &:hover{
        transform: scale(1.2);
    }
}
</style>