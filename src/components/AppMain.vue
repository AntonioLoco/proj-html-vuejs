<script>
// Import Compontent
import AppServices from './AppServices.vue';
import AppBanner from './AppBanner.vue';
import AppPortfolio from './AppPortfolio.vue';
import AppPriceList from './AppPriceList.vue';

export default{
    name: "AppMain",
    components: {
        AppServices,
        AppBanner,
        AppPortfolio,
        AppPriceList
    }
}
</script>

<template>
    <main> 
        <AppServices />
        <AppBanner />
        <AppPortfolio />
        <AppPriceList />
    </main>
</template>

<style lang="scss" scoped>
</style>