<template>
    <!-- Cat Image Section -->
    <section class="cat-container" aria-label="Decorative Cat Image">
        <div class="cat">
            <img :src="image.path" :alt="image.alt">

            <!-- Add aria-hidden attribute to the following tags to hide them from screen readers
                ---- Because those are only decorative elements that will be shown around the image -->
            <div class="inner-circle" aria-hidden="true"></div>
            <div class="outer-circle" aria-hidden="true"></div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue'
import catImgPNG from '@/assets/cat.png'

export default {
    setup() {
        const image = ref({
            path: catImgPNG,
            alt: 'Happy cat enjoying its food'
        });

        return {image}
    }
}
</script>