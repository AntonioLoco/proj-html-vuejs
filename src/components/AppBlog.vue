<script>
import AppCardBlogs from './AppCardBlogs.vue';
import AppTitleSection from './AppTitleSection.vue';

import { store } from '../store';

export default{
    name: "AppBlog",
    components: {
        AppCardBlogs,
        AppTitleSection
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
    <section id="blog">
        <div class="container py-5">
            <AppTitleSection 
                section="Blog"
                title="Latest Posts"
                paragraph="When, while the lovely valley teems with vapour around meand the"
                color="black"
                class="text-center"
            />

            <div class="row pt-5">
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
}
</style>