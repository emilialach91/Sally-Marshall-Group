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
  var styleArray = [
    {
      "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#186f88"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
      "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
      "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
      "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
      "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
      "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dff1f6"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
      "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c8e6ef"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
      "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bce5f0"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
      "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
      "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
      "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
      "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
      "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
      "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#97d2e3"
            },
            {
                "lightness": 17
            }
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
    zoom: 15,
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

init_google_map("51.2728078, 0.5236215");