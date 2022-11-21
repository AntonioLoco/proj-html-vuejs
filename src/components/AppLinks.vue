<script>
export default{
    name: "AppLinks",
    props: {
        links: Object
    }
}
</script>

<template>
    <h4 class="text-light mt-3 fs-5">{{links.title}}</h4>
    <ul>
        <li class="mb-2" v-for="(link,index) in links.links" :key="index">
            <a v-if="link.href" :href="link.href">{{link.name}}</a>
            <div v-else class="description">
                <h5 class="text-light fs-6 mb-3">{{link.name}}: <span>{{link.description}}</span></h5>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.description{
    span{
        font-size: 1rem;
        color: $text-grey;
    }
}
</style>