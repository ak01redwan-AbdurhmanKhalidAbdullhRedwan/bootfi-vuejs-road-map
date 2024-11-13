<template>
    <section class="section collection">
        <div class="container">
            <ul class="collection-list has-scrollbar">
                <CollectionCard 
                    v-for="card in cards" 
                    :key="card.id" 
                    :title="card.title" 
                    :image="card.image"
                    :buttonHref="card.buttonHref" 
                />
            </ul>

        </div>
    </section>
</template>

<script>
import CollectionCard from './CollectionCard.vue';
import menCollectionCardJPG1 from '@/assets/images/collection-1.jpg';
import menCollectionCardJPG2 from '@/assets/images/collection-2.jpg';
import menCollectionCardJPG3 from '@/assets/images/collection-3.jpg';
import { reactive } from 'vue';

export default {
    components: {
        CollectionCard
    },
    setup() {
        let cards = reactive([
            {id: 1, title: 'Men Collections', image: menCollectionCardJPG1, buttonHref: '#men'},
            {id: 2, title: 'Women Collections', image: menCollectionCardJPG2, buttonHref: '#women'},
            {id: 3, title: 'Sport Collections', image: menCollectionCardJPG3, buttonHref: '#sport'}
        ]);

        return {cards};
    }
}
</script>