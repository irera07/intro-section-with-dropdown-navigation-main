
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const properties = document.querySelector('.main-properties');

menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none'; 
    closeButton.style.display = 'block'; 
    properties.style.display = 'flex'
});
closeButton.addEventListener('click', () => {
    closeButton.style.display = 'none'; 
    menuButton.style.display = 'block'; 
    properties.style.display = 'none'
});

