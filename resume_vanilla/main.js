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

    scrollIntoView(link);
});

//contact button

const contactMeBTN=document.querySelector('.home__contact');
contactMeBTN.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

// 화면 내리면 저절로 흐려지게 만들어주는 부분
const home = document.querySelector('#home_container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity=1-window.scrollY / homeHeight;

})

// scrollup button
const arrowUp=document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
})

/* util*/
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}