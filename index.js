document.addEventListener ('DOMContentLoaded', () => {
    const button = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.hamburger-menu');

    const openMenu = () => {
        menu.classList.add('show-menu');
        button.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        menu.classList.remove('show-menu');
        button.setAttribute('aria-expanded', 'false');
    };

    const menuOpen = () => {
        return menu.classList.contains('show-menu');
    };

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menuOpen()) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (menuOpen() && !menu.contains(e.target) && !button.contains(e.target)) {
            closeMenu();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape'&& menuOpen()) {
            const insideMenu = menu.contains(document.activeElement);
            closeMenu();

            if (insideMenu) {
                button.focus();
            } else {
                button.blur();
            }
        }
    })
})