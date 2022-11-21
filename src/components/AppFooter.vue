<script>
import AppFooterLinks from './AppFooterLinks.vue';

export default{
    name: "AppFooter",
    components: {
        AppFooterLinks
    }
}
</script>

<template>
    <footer>
        <AppFooterLinks />
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer{
    background: $background-header;
}
</style>