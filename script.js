/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//menu show
if(navToggle) {
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu')
    })
}
//menu hidden

if(navClose) {
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport height,add the scroll-header class to the header tagg
    if (this.scrollY >=50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll' , scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container" , {
    loop:true,
    spaceBetween:24,
    slidesPerView: 'auto' ,
    grabCursor:true,

    pagination: {
        el: ".swiper-pagination" , 
        dynamicBullets:true,
    } ,
    breakpoints: {
        768: {
            slidesPerView:3 ,

        },
        1024: {
            spaceBetween:48 ,
        },
    }
});

/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/