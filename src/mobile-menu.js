(() => {
    const refs = {
        openMenuBtn: document.querySelector('.open-menu-btn'),
        closeMenuBtn: document.querySelector('.close-menu__btn'),
        menu: document.querySelector('.mob-menu__container'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
    }
})();