<script>
// Import Compontent
import AppServices from './AppServices.vue';
import AppBanner from './AppBanner.vue';
import AppPortfolio from './AppPortfolio.vue';
import AppPriceList from './AppPriceList.vue';
import AppBlog from './AppBlog.vue';
import AppTestimonials from './AppTestimonials.vue';
import AppAdvertising from './AppAdvertising.vue';
import AppSubscribe from './AppSubscribe.vue';

export default{
    name: "AppMain",
    components: {
        AppServices,
        AppBanner,
        AppPortfolio,
        AppPriceList,
        AppBlog,
        AppTestimonials,
        AppAdvertising,
        AppSubscribe
    }
}
</script>

<template>
    <main> 
        <AppServices />
        <AppBanner />
        <AppPortfolio />
        <AppPriceList />
        <AppBlog />
        <AppTestimonials />
        <AppAdvertising />
        <AppSubscribe />
    </main>
</template>

<style lang="scss" scoped>
</style>