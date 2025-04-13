const hamburgerMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = "block";
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    hamburgerMenu.style.display = "block";
    closeMenu.style.display = 'none';
    menu.style.display = 'none';
})