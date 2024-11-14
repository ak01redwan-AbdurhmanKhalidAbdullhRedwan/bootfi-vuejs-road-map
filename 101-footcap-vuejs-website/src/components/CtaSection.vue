<template>
    <section class="section cta">
        <div class="container">
            <ul class="cta-list">

                <li v-for="cta in CTAs" :key="cta.id">
                    <div class="cta-card" :style="{backgroundImage: `url(${cta.image})`}">
                        <p class="card-subtitle">{{ cta.title }}</p>

                        <h3 class="h2 card-title">{{ cta.mainTitle }}</h3>

                        <a :href="cta.link" class="btn btn-link">
                            <span>{{ cta.linkLabel }}</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>
                </li>

            </ul>

        </div>
    </section>
</template>

<script>
import cta1JPG from '@/assets/images/cta-1.jpg';
import cta2JPG from '@/assets/images/cta-2.jpg'
import { reactive } from 'vue';

export default {
    setup() {
        const CTAs = reactive([
            {id: 1, image: cta1JPG, title: 'Adidas Shoes', mainTitle: 'The Summer Sale Off 50%', linkLabel: 'Shop Now', link: '#AdidasShoes'},
            {id: 2, image: cta2JPG, title: 'Nike Shoes', mainTitle: 'Makes Yourself Keep Sporty', linkLabel: 'Shop Now', link: '#NikeShoes'}
        ]);

        return {cta1JPG, cta2JPG, CTAs}
    }
}
</script>