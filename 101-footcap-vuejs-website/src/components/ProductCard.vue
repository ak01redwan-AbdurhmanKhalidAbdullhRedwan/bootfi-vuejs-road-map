<template>
    <li class="product-item">
        <div class="product-card" tabindex="0">

            <figure class="card-banner">
                <img :src="image" width="312" height="350" loading="lazy" :alt="title"
                    class="image-contain">

                <div v-show="badge" class="card-badge">{{ badge }}</div>

                <ul class="card-action-list">

                    <li class="card-action-item">
                        <button class="card-action-btn" aria-labelledby="card-label-1">
                            <ion-icon name="cart-outline"></ion-icon>
                        </button>

                        <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                        <button class="card-action-btn" aria-labelledby="card-label-2">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                    <li class="card-action-item">
                        <button class="card-action-btn" aria-labelledby="card-label-3">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <div class="card-action-tooltip" id="card-label-3">Quick View</div>
                    </li>

                    <li class="card-action-item">
                        <button class="card-action-btn" aria-labelledby="card-label-4">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <div class="card-action-tooltip" id="card-label-4">Compare</div>
                    </li>

                </ul>
            </figure>

            <div class="card-content">

                <div class="card-cat">
                    <a v-for="category in categories" 
                        :key="category.link" :href="category.link" class="card-cat-link"> 
                        {{category.text }}
                        {{ category.link != categories[categories.length-1].link ? '/' : ' ' }}
                    </a>
                </div>

                <h3 class="h3 card-title">
                    <a :href="link">{{ title }}</a>
                </h3>

                <data class="card-price" value="180.85">${{ price }}</data>

            </div>

        </div>
    </li>
</template>

<script>


export default {
    props: {
        badge: {type: String, default: ''},
        image: {type: Object, default: null},
        title: {type: String, default: 'Card Title'},
        link: {type: String, default: ''},
        price: {type: Number, default: 0},
        categories: {type: Array, required: true}
    }
}
</script>