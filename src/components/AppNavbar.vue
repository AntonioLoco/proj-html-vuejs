<script>
export default{
    name: "AppNavbar",
    props: {
        links: Array
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
            <ul class="navbar-link mt-3 mt-lg-0">
                <li v-for="(link,index) in links" :key="index">
                    <a 
                        :href="link.href"
                        :class="{ 'active' : link.active}"
                    >
                        {{link.name}}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- /Navbar -->

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.navbar{
    .navbar-link{
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