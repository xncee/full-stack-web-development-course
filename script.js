document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navBar = document.querySelector('.navBar');
    
    burgerBtn.addEventListener('click', function() {
        navBar.classList.toggle('show');
        burgerBtn.classList.toggle('active');
    });

    const navLinks = navBar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navBar.classList.remove('show');
            burgerBtn.classList.remove('active');
        });
    });
});