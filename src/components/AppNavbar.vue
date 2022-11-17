<script>
import AppButton from './AppButton.vue';
export default{
    name: "AppNavbar",
    props: {
        links: Array
    },
    components: {
        AppButton
    }
}
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="container-fluid justify-content-center justify-content-lg-between">
            <a class="navbar-brand">
                <img src="../assets/img/white-logo-2.png" alt="Logo">
            </a>
            <div class="navbar-navigation mt-3 mt-lg-0">
                <ul class="navbar-link">
                    <li v-for="(link,index) in links" :key="index">
                        <a 
                            :href="link.href"
                            :class="{ 'active' : link.active}"
                        >
                            {{link.name}}
                        </a>
                    </li>
                </ul>
                <AppButton name="Sign In" href="/signin" color="blue" class="ms-3"/>
            </div>
        </div>
    </nav>
    <!-- /Navbar -->

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.navbar{
    &-navigation{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    &-link{
        display: flex;
        margin: 0;
        li{
            margin: 0 1em;

            a:hover,
            a.active{
                color: $text-orange;
            }
        }
    }
}
</style>