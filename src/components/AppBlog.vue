<script>
import AppCardBlogs from './AppCardBlogs.vue';

import { store } from '../store';

export default{
    name: "AppBlog",
    components: {
        AppCardBlogs
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- Section Blog Post -->
    <section>
        <div class="container py-5">
            <div class="title-section text-center">
                    <h5 class="fs-6 fw-normal">Blog</h5>
                    <h2 class="fs-1 fw-bold">Latest <span class="fw-normal">Posts</span></h2>
                    <h4 class="fs-5 fw-light">When, while the lovely valley teems with vapour around meand the</h4>
            </div>
            <div class="row py-5">
                <div
                    v-for="(post,index) in store.blogLists"
                    :key="index"
                    :class="post.img ? 'col-12 col-xl-6 mb-4' : 'col-6 col-xl-3' "
                >
                    <AppCardBlogs :post="post"/>
                </div>
            </div>
        </div>
    </section>
    <!-- /Section Blog Post -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background-color: $background-light-grey;
    .title-section{
        h5{
            color: $text-orange;
        }
    }
}
</style>