// header scrolling effect
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
});

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");

        //Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //hamburger animation
        hamburger.classList.toggle("toggle");
    };
};

window.onload = () => navSlide();

// Scroll-triggered animation for <p> elements
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('p');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('animate');
            } else {
                el.classList.remove('animate');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the function on page load
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
        );
    }

    function onScroll() {
        let currentSection = '';
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the function on page load
});