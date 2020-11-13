const navSlide = () => {
    const burger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.quick-links');
    const navLinks = document.querySelectorAll('.quick-links a')

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        console.log('click');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
    });

    
};

const app = () => {
    navSlide();
};

app();