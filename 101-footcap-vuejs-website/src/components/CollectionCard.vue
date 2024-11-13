<template>
    <li>
        <div class="collection-card" :style="{ backgroundImage: `url(${image})`}">
            <h3 class="h4 card-title">{{ title }}</h3>

            <MainButton 
                :label="buttonLabel" 
                :href="buttonHref" 
                classes="btn btn-secondary" 
                ionIconName="arrow-forward-outline"
                is-aria-hidden="true"
            />
        </div>
    </li>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
    name: 'CollectionCard',
    props: {
        title: {
            type: String,
            default: 'Collection Card Title'
        },
        image: {
            type: String,
            default: null
        },
        buttonLabel: {
            type: String,
            default: 'Explore All'
        },
        buttonHref: {
            type: String,
            default: '#'
        }

    },
    components: {
        MainButton
    }
}
</script>