const menu = document.querySelector('nav #menu');
const openMenuButton = document.querySelector('.menu-toggle');
const closeMenuButton= document.querySelector('.menu-close');

/*
/// This function toggles the menu to Open, Close, and Change aria-expanded 
//* according to the current state */
function toggleMenu() {
    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
    const isExpanded = openMenuButton.getAttribute('aria-expanded');
    openMenuButton.setAttribute("aria-expanded", isExpanded != "true");
}

// Listen for the click event and then use the toggleMenu method to expand the sidebar menu
openMenuButton.addEventListener('click', () => {
    toggleMenu()
});

// Listen for the click event then use the same toggleMenu method to close and hide our menu
closeMenuButton.addEventListener('click', () => {
    toggleMenu()
});