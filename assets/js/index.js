
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 150) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  

        const targetId = this.getAttribute('href');  
        const targetElement = document.querySelector(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'  
            });
        }
    });
});
AOS.init();

window.onload = function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0'; 
        setTimeout(function() {
            loadingScreen.style.display = 'none'; 
            AOS.init(); 
        }, 500); 
    }, 1500); 
};


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); 



hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});