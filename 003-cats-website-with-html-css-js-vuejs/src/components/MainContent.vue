<template>
    <!-- Main Content Section -->
    <main>
        <section aria-labelledby="main-heading">
            <h1 id="main-heading">
                {{ title }} <img :src="titleIcon.path" :alt="titleIcon.alt">
            </h1>
            <p class="subhead">{{ subheadText }}</p>
            <a :href="getBonkersButton.href" class="primary-cta">{{ getBonkersButton.text }}</a>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
import bonkersIconSVG from "@/assets/bonkers.svg"

export default {
    setup() {
        let title = ref("Your cat will go ");
        let titleIcon = ref({
            path: bonkersIconSVG,
            alt: 'Bonkers text'
        });

        let subheadText = `
            ...for the world's best-tasting cat food, 
            sourced with only the finest ingredients.
            Made with love from the heart of Mississippi.
        `;

        let getBonkersButton = ref({
            text: 'Get Bonkers',
            href: '#get-bonkers'
        });

        return {
            title, titleIcon, subheadText, getBonkersButton
        }
    }
}
</script>