<script>
// Import Compontent
import AppServices from './AppServices.vue';
import AppBanner from './AppBanner.vue';
import AppPortfolio from './AppPortfolio.vue';
import AppPriceList from './AppPriceList.vue';
import AppBlog from './AppBlog.vue';

export default{
    name: "AppMain",
    components: {
        AppServices,
        AppBanner,
        AppPortfolio,
        AppPriceList,
        AppBlog
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
    </main>
</template>

<style lang="scss" scoped>
</style>