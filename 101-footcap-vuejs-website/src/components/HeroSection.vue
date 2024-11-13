<template>
    <section class="section hero" :style="{ backgroundImage: `url(${heroImgPNG})`}">
        <div class="container">

            <h2 class="h1 hero-title">
                {{ title }} <strong> {{ secondTitle }} </strong>
            </h2>

            <p class="hero-text">
                Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
                existing an
                expanded array of leadership.
            </p>

            <MainButton label="Shop Now" ion-icon-name="arrow-forward-outline"/>

        </div>
    </section>
</template>

<script>
import heroImgPNG from '@/assets/images/hero-banner.png'
import MainButton from './MainButton.vue';

export default {
    name: 'HeroSection',
    props: {
        title: {
            type: String,
            default: 'New Summer'
        },
        secondTitle: {
            type: String,
            default: ''
        }
    },
    setup() {
        return {heroImgPNG}
    },
    components: {
        MainButton
    }
}
</script>