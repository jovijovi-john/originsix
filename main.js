// Open and close menu when click in icon

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle){
    element.addEventListener("click", () => {
        nav.classList.toggle("show");
    })
}

// When click in menu item, hide the menu

const links = document.querySelectorAll('nav ul li a');
for (const link of links){
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    })
}

// Change page header when scrolling

 

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScrolling() {

    if (window.scrollY >= navHeight) {
        // scroll is greater than header height
        header.classList.add("scroll");
    } else {
        // scroll is less than header height
        header.classList.remove("scroll");
    }
}

// Testimonials carousel slider swiper
// https://swiperjs.com/get-started

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    mousewheel: true, // rodar com o teclado
    keyboard: true, // usar as teclas para passar 
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// scrollreveal: show elements when scrolling in page

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
}); 

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval: 100}
);



// Button back-to-top

function backToTop(){
    
    const backToTopButton = document.querySelector(".back-to-top");
    
    if (window.scrollY >= 580){
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}


// Active menu according to the visible section on the page

const sections = document.querySelectorAll('main section[id]'); //todas as seções que contem id

function activateAtCurrentSections(){
    const checkpoint = window.pageYOffset + ((window.innerHeight / 8) * 4);
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;  
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
        
        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + "]").classList.add('active'); 
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + "]").classList.remove('active');
        }
    }
}

// When Scroll

window.addEventListener("scroll", () => {
    changeHeaderWhenScrolling();
    backToTop();
    activateAtCurrentSections();
})
