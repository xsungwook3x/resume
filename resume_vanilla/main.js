'use strict'

// Make navbar transparent whe it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});

// navbar move to target
const navbarMenu =document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=> {

    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

//contact button

const contactMeBTN=document.querySelector('.home__contact');
contactMeBTN.addEventListener('click',()=>{
    const scrollTo=document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior:'smooth'});
})