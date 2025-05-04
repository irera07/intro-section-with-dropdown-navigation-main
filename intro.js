// filepath: c:\Users\User\Desktop\Up Skills tasks\intro-section-with-dropdown-navigation-main\intro.js

// Select the menu and close buttons
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

// Initially hide the close button
closeButton.style.display = 'none';

// Add event listener to the menu button
menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none'; // Hide the menu button
    closeButton.style.display = 'block'; // Show the close button
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
    closeButton.style.display = 'none'; // Hide the close button
    menuButton.style.display = 'block'; // Show the menu button
});