// Get the navbar element by its ID
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than 50px
    if (window.scrollY > 50) {
        // If scrolled, add the 'scrolled' class to the navbar
        navbar.classList.add('scrolled');
    } else {
        // If at the top, remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});
