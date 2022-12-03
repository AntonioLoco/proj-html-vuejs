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
            <button class="hamburger-btn d-lg-none" @click="$emit('toggleMenu')">
                <i v-if="!isOpen" class="fa-solid fa-bars"></i>
                <i v-else class="fa-solid fa-xmark"></i>
            </button>
            <div class="navbar-navigation d-lg-flex" :class="{'d-none' : !isOpen}">
                <ul class="navbar-link">
                    <li v-for="(link,index) in links" :key="index">
                        <a 
                            :href="link.href"
                            :class="{ 'active' : link.active}"
                            @click="$emit('linkClicked')"
                            v-motion-roll-bottom
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
        position: relative;
        z-index: 999;
    }

}

@media screen and (max-width: 991px) {
    .navbar-navigation{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: $background-header;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 900;

        .navbar-link{
            display: block;

            li{
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }
        }
    }
}
</style>