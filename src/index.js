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
    centerPadding: '100px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      }, 
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
