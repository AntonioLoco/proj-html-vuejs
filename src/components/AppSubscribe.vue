<script>
import AppButton from './AppButton.vue';
export default{
    name: "AppSubscribe",
    components: {
        AppButton
    }
}
</script>

<template>
    <!-- Section Subscribe -->
    <section id="contact">
        <div class="container">
            <div class="form-subscribe row align-items-center">
                <div class="col-12 col-lg-7">
                    <h2>We Offer Awesome Services</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaec</p>
                </div>
                <div class="col-12 col-lg-5 d-flex justify-content-end">
                    <div class="form">
                        <input type="text" placeholder="Enter your Email Address">
                        <AppButton name="Subscribe" href="/subscribe" color="blue"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Section Subscribe -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section{
    background-color: $background-light-grey;

    .container{
        .form-subscribe{
            padding: 4em 1em;
            background: $background-btn-orange;
            border-radius: 20px;
            color: $text-white;
            transform: translateY(50%);
    
            h2{
                font-size: 2.2rem;
            }
    
            p{
                font-size: 1rem;
            }
    
            .form{
                position: relative;
                width: 100%;
                input{
                    width: 100%;
                    padding: .7em 1em;
                    border-radius: 20px;
                    border-style: none;

                    &:focus-visible{
                        outline: none;
                    }
                }
    
                a{
                    position: absolute;
                    top: 50%;
                    right: 2px;
                    transform: translateY(-50%);
                }
            }
        }
    }
}
</style>