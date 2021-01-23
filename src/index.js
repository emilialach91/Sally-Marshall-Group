import './styles/main.scss';
// import './style/reset/reset.css';

// const button = document.querySelector('.hero__invitation');
// const element = document.querySelector('.project__surf');

// button.addEventListener('click', function () {
//     element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
// });


const menu = document.querySelector('.menu__hamburger');
const navbar = document.querySelector ('.menu__navbar');
// const navList= document.querySelector('.navList ul')
const overlay = document.getElementById("menu__overlay");

// navList.addEventListener('click', () => {
//     navbar.classList.toggle("change")
//     overlay.classList.toggle("active")
// });

menu.addEventListener('click', () => {
    navbar.classList.toggle("change")
    overlay.classList.toggle("active")
});


