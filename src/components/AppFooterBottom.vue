<script>
import { store } from '../store';
export default{
    name: "AppFooterBottom",
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="container pt-3 pb-2 d-flex justify-content-between">
            <div class="corporate">
                <h4>2020 Phlox. All Higths Reserved.</h4>
            </div>
            <div class="social-links">
                <a 
                    v-for="(social,index) in store.socialLinks" 
                    :key="index" 
                    :href="social.href"
                    :class="social.name"
                    >
                    <i :class="`fa-brands fa-${social.name}`"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.corporate{
    h4{
        font-weight: 200;
        font-size: .8rem;
        color: $text-grey;
    }
}

.social-links{
    a{
        color: $text-white;
        margin: 0 .5rem;
        
        &.instagram:hover{
            color: $text-orange;
        }

        &.linkedin-in:hover,
        &.facebook-f:hover{
            color: #0a66c2;
        }

        &.twitter:hover{
            color: #1da1f2;
        }
    }
}
</style>