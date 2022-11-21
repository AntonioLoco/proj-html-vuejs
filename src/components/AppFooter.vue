<script>
import AppFooterTop from './AppFooterTop.vue';
import AppFooterBottom from './AppFooterBottom.vue';

export default{
    name: "AppFooter",
    components: {
        AppFooterTop,
        AppFooterBottom
    }
}
</script>

<template>
    <footer>
        <AppFooterTop />
        <AppFooterBottom />
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer{
    background: $background-header;
}
</style>