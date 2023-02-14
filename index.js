const hamburger = document.getElementsByClassName('hamb')[0];
const menu = document.getElementById('get_menu');     
const closeButton = document.getElementById('close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
    menu.classList.toggle('menu-hide');
    
});

closeButton.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
    menu.classList.toggle('menu-hide');   
    
});