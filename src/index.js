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


  
  
 function init_google_map(map_coords, map_type) {
  var color = "#234c24";
  var styleArray = [
    {
      "featureType": "landscape",
      "stylers": [
        {"saturation": -100},
        {"lightness": 65},
        {"visibility": "on"}
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {"saturation": -100},
        {"lightness": 51},
        {"visibility": "simplified"}
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {"saturation": -100},
        {"visibility": "simplified"}
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {"saturation": -100},
        {"lightness": 30},
        {"visibility": "on"}
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {"saturation": -100},
        {"lightness": 40},
        {"visibility": "on"}
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {"saturation": -100},
        {"visibility": "simplified"}
      ]
    },
    {
      "featureType": "administrative.province",
      "stylers": [
        {"visibility": "off"}
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        {"visibility": "on"},
        { "lightness": -25 },
        { "saturation": -100}
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {"hue": color},
        {"lightness": -25},
        {"saturation": -87}
      ]
    }
  ];

  var isDraggable = jQuery(document).width() > 480 ? true : false;
  var lat_lng = map_coords.split(',');
  var point = new google.maps.LatLng( lat_lng[0], lat_lng[1] );
  var map_icon = 'https://img.imgur.com/a6TdGI3.png';
  var google_map_type = google.maps.MapTypeId.ROADMAP;
  if ( map_type == 'satellite' ) {
    google_map_type = google.maps.MapTypeId.SATELLITE;
  }	
  var mapOptions = {
    zoom: 14,
    center: point,
    mapTypeId: google_map_type,
    styles:styleArray,
    draggable: isDraggable,
    scrollwheel: false
  }	
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: point,
    map: map,
    icon: map_icon
  });
}

init_google_map("51.272644, 0.525270", "road");