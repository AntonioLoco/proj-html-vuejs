<script>
import AppButton from './AppButton.vue';
export default{
    name: "AppNavbar",
    props: {
        links: Array,
        isOpen: Boolean
    },
    components: {
        AppButton
    }
}
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="container-fluid justify-content-between overflow-hidden">
            <a class="navbar-brand">
                <img src="../assets/img/white-logo-2.png" alt="Logo">
            </a>
            <button class="hamburger-btn d-lg-none" @click="$emit('openMenu')">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="navbar-navigation mt-3 mt-lg-0 d-lg-flex" :class="{'d-none' : !isOpen}">
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
                <AppButton name="Sign In" href="/signin" color="blue" class="mt-2 mt-lg-0 ms-lg-3"/>
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

        .navbar-link{
        display: flex;
        margin: 0;
        li{
            margin: 0 1em;

            a.active{
                color: $text-orange;
            }
        }
    }
    }

    .hamburger-btn{
        color: $text-white;
        font-size: 1.5rem;
        border: none;
        background: none;
    }

}

@media screen and (max-width: 991px) {
    .navbar-navigation{
        display: block;
        width: 100%;

        .navbar-link{
            display: block;
        }
    }
}
</style>