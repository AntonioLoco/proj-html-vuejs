<script>
export default{
    name: "AppTitleSection",
    props: {
        section: String,
        title: String,
        paragraph: String,
        color: String,
    }
}
</script>

<template>
    <div 
        class="title-section" 
        :class="color"
    >
        <h5 class="fs-6 fw-normal">{{section}}</h5>
        <h2 class="fs-1 fw-bold">
            {{ title.split(' ')[0]  + " "}}<span class="fw-normal" v-for="number in title.split(' ').length - 1" :key="number">{{title.split(' ')[number] + " "}}</span></h2>
        <h4 class="fs-5 fw-light" v-if="paragraph">{{ paragraph }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.title-section{
    h5{
        color: $text-orange;
    }

    &.white{
        color: $text-white;
    }

    &.black{
        color: $text-black;
    }
}
</style>