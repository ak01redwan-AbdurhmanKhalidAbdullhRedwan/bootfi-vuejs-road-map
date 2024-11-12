<template>
    <header class="header">
        <div class="header-left">
            <a href="index.html">
                <img :src="logo.path" :alt="logo.alt">
            </a>
            <span class="divider hide-mobile"></span>
            <a :href="homeButton.href" class="home hide-mobile">{{ homeButton.text }}</a>
        </div>

        <nav aria-label="Primary">
            <button @click="toggleMenu" :title="openMenuButton.title" 
                :aria-expanded=" menuIsOpen ? 'true' : 'false'"
                class="menu-toggle hide-desktop" 
                aria-controls="menu">
                <img :src="openMenuButton.icon" :alt="openMenuButton.alt">
            </button>
            <ul id="menu" :class="{ open: menuIsOpen }" class="menu">
                <li class="hide-desktop">
                    <button @click="toggleMenu" class="menu-close" :title="closeMenuButton.title" :aria-label="closeMenuButton.alt">
                        <img :src="closeMenuButton.icon" :alt="closeMenuButton.alt">
                    </button>
                </li>
                <li v-for="option in menuOption" :key="option.href"><a :href="option.href">{{ option.text }}</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';
import logoPath from '@/assets/logo.svg';
import openMenuSVG from '@/assets/menu.svg'
import closeMenuSVG from '@/assets/close.svg'
export default {
    setup() {
        const logo = ref({
            path: logoPath,
            alt: "Basic Cat's Food website logo"
        });

        const homeButton = ref({
            href: 'index.html',
            text: 'Home'
        });

        const openMenuButton = ref({
            icon: openMenuSVG,
            title: "Open menu",
            alt: "Open menu"
        });

        const closeMenuButton = ref({
            icon: closeMenuSVG,
            title: "Close menu",
            alt: "Close menu"
        });

        const menuOption = ref([
            { text: 'Our Food', href: '#our-food' },
            { text: 'Ingredients', href: '#ingredients' },
            { text: 'Studies', href: '#studies' },
            { text: 'FAQ', href: '#faq' }
        ]);


        let menuIsOpen = ref(false);
        function toggleMenu() {
            menuIsOpen.value = !menuIsOpen.value;
        }

        return {
            logo,
            homeButton,
            openMenuButton,
            closeMenuButton,
            menuOption,
            menuIsOpen,
            toggleMenu
        };
    }
};
</script>
