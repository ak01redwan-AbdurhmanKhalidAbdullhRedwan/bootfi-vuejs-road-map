<template>
    <header class="header" data-header>
        <div class="container">

            <div class="overlay" data-overlay></div>

            <a href="#" class="logo">
                <img :src="logo.path" width="160" height="50" :alt="logo.alt">
            </a>

            <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav class="navbar" data-navbar>

                <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <a href="#" class="logo">
                    <img :src="logo.path" width="190" height="50" :alt="logo.alt">
                </a>

                <ul class="navbar-list">

                    <li v-for="menuItem in menuItems" :key="menuItem.href" class="navbar-item">
                        <a :href="menuItem.href" class="navbar-link">{{ menuItem.text }}</a>
                    </li>

                </ul>

                <ul class="nav-action-list">

                    <li>
                        <button class="nav-action-btn">
                            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

                            <span class="nav-action-text">Search</span>
                        </button>
                    </li>

                    <li>
                        <a href="#" class="nav-action-btn">
                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                            <span class="nav-action-text">Login / Register</span>
                        </a>
                    </li>

                    <li>
                        <button class="nav-action-btn">
                            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                            <span class="nav-action-text">Wishlist</span>

                            <data class="nav-action-badge" value="5" aria-hidden="true">5</data>
                        </button>
                    </li>

                    <li>
                        <button class="nav-action-btn">
                            <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>

                            <data class="nav-action-text" value="318.00">Basket: <strong>$318.00</strong></data>

                            <data class="nav-action-badge" value="4" aria-hidden="true">4</data>
                        </button>
                    </li>

                </ul>

            </nav>

        </div>
    </header>
</template>

<script>
import logoSVG from '@/assets/images/logo.svg'
import { reactive, ref } from 'vue';

export default {
    setup() {
        const logo = reactive({
            path: logoSVG,
            alt: 'Footcop logo'
        });

        const menuItems = ref([
            {href: '#home', text: 'Home'},
            {href: '#about', text: 'About'},
            {href: '#products', text: 'Product'},
            {href: '#shop', text: 'Shop'},
            {href: '#blog', text: 'Blog'},
            {href: '#contact', text: 'Contact'},

        ]);

        return {logo, menuItems}
    }
}
</script>