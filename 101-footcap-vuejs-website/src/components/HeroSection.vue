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

            <button class="btn btn-primary">
                <span>Shop Now</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </button>

        </div>
    </section>
</template>

<script>
import heroImgPNG from '@/assets/images/hero-banner.png'
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
    }
}
</script>