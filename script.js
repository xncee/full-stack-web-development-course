document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navBar = document.querySelector('.navBar');
    const overlay = document.getElementById('overlay');

    burgerBtn.addEventListener('click', function() {
        navBar.classList.toggle('show');
        overlay.classList.toggle('show');
        burgerBtn.classList.toggle('active');
    });

    const removeClasses = () => {
        navBar.classList.remove('show');
        overlay.classList.remove('show');
        burgerBtn.classList.remove('active');
    }
    const navLinks = navBar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', removeClasses);
    });

    overlay.addEventListener('click', removeClasses);
});