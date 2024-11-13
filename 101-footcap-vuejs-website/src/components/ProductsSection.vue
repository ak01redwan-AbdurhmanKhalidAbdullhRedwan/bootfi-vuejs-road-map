<template>
    <section class="section product">
        <div class="container">

            <h2 class="h2 section-title">Bestsellers Products</h2>

            <ul class="filter-list">
                <li v-for="filterItem in filterList" :key="filterItem.id">
                    <button 
                        onclick="alert('this should complete to filter based on item company')" 
                        :class="{'active': currentActiveItem == filterItem.id}" class="filter-btn"
                    >
                        {{ filterItem.text }}
                    </button>
                </li>
            </ul>

            <ul class="product-list">
                <ProductCard 
                    v-for="product in products" 
                    :key="product.link"
                    :badge="product.badge"
                    :image="product.image"
                    :title="product.title"
                    :link="product.link"
                    :price="product.price"
                    :categories="product.categories"
                />
            </ul>

        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
import product1 from '@/assets/images/product-1.jpg';
import product2 from '@/assets/images/product-2.jpg';
import product3 from '@/assets/images/product-3.jpg';
import product4 from '@/assets/images/product-4.jpg';
import product5 from '@/assets/images/product-5.jpg';
import product6 from '@/assets/images/product-6.jpg';
import product7 from '@/assets/images/product-7.jpg';
import product8 from '@/assets/images/product-8.jpg';

export default {
    name: 'ProductsSection',
    components: {
        ProductCard
    },
    setup() {
        const products = ref([
            {badge: 'New', image: product1, title: 'Running Sneaker Shoes', link: '#RunningSneakerShoes', price: 210.50, categories:[
                {link: '#man', text: 'Man'},
                {link: '#women', text: 'Women'}
            ]}
            ,
            {badge: '', image: product2, title: 'Leather Mens Slipper', link: '#LeatherMensSlipper', price: 190.85, categories:[
                {link: '#man', text: 'Man'},
                {link: '#sports', text: 'Sports'}
            ]}
            ,
            {badge: 'New', image: product3, title: 'Simple Fabric Shoe', link: '#SimpleFabricShoe', price: 160.85, categories:[
                {link: '#man', text: 'Man'},
                {link: '#women', text: 'Women'}
            ]}
            ,
            {badge: '-25%', image: product4, title: 'Air Jordan 7 Retro', link: '#AirJordan7Retro44', price: 169.99, categories:[
                {link: '#man', text: 'Man'},
                {link: '#sports', text: 'Sports'}
            ]}
            ,
            {badge: 'New', image: product5, title: 'Nike Air Max 270 SE', link: '#NikeAirMax270SE', price: 120.85, categories:[
                {link: '#man', text: 'Man'},
                {link: '#women', text: 'Women'}
            ]}
            ,
            {image: product6, title: 'Adidas Sneakers Shoes', link: '#AdidasSneakersShoes', price: 100.50, categories:[
                {link: '#man', text: 'Man'},
                {link: '#women', text: 'Women'}
            ]}
            ,
            {image: product7, title: 'Nike Basketball shoes', link: '#NikeBasketballshoes', price: 120.85, categories:[
                {link: '#men', text: 'Men'},
                {link: '#sport', text: 'Sport'}
            ]}
            ,
            {image: product8, title: 'Simple Fabric Shoe', link: '#SimpleFabricShoe', price: 100.85, categories:[
                {link: '#men', text: 'Men'},
                {link: '#women', text: 'Women'}
            ]}
        ]);


        const filterList = ref([
            {id: 1, text: 'All', compony: 'all'},
            {id: 2, text: 'Nike', compony: 'nike'},
            {id: 3, text: 'Adidas', compony: 'adidas'},
            {id: 4, text: 'Puma', compony: 'puma'},
            {id: 5, text: 'Bata', compony: 'bata'},
            {id: 6, text: 'Apex', compony: 'apex'}
        ]);
        let currentActiveItem = 1;

        return {products, filterList, currentActiveItem}
    }
}
</script>