import './styles/main.scss';


const element = document.querySelector('.info');
const button = document.querySelector('.bounce');
const menu = document.querySelector('.menu__hamburger');
const navbar = document.querySelector ('.menu__navbar');
const overlay = document.getElementById("menu__overlay");

menu.addEventListener('click', () => {
    navbar.classList.toggle("change")
    overlay.classList.toggle("active")
});

button.addEventListener('click', function () {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


$('.multiCarousel__content').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 720,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
  
