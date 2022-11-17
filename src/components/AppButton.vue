<script>
export default{
    name: "AppButton",
    props: {
        name: String,
        href: String,
        color: String
    }
}
</script>

<template>
    <a
    class="ms_btn"
    :href="href" 
    :class="color"
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

    &.blue{
        background: $background-btn-blue;
    }

    &.orange{
        background: $background-btn-orange;
    }
}
</style>