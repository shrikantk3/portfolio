// require('https/://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js');

$(document).ready(function(){
    AOS.init();
    $('.preloader').hide();
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        // sectionsColor: ['#46344E', '#2F4F4F', '#9D8D8F', '#FAED26', '#9B786F'],
        sectionsColor: ['#fff', '#f5f5f5', '#fff', '#f5f5f5', '#ffff'],
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4', 'Page 5']
        },
        afterRender: function () {
            //playing the video
            // $('video').get(0).play();
        }
    });
  
    $('.header-info .fa-desktop + strong').html(navigator.platform);
    $('.header-info .fa-caret-down + strong').html(navigator.language);
    navigator.geolocation.getCurrentPosition(success, error);
        console.log(navigator);
        function success(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.latitude,position.coords.longitude)
            $('.header-info .fa-globe + strong').html("India (" + position.coords.latitude + " , " + position.coords.longitude + ")");
            initMap(position.coords.latitude ,position.coords.longitude)
            // var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBfyJew4ioXhFCJZ5rFqLHg9cUsKRujWis&latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
            // $.getJSON(GEOCODING).done(function(location) {
            //     console.log(location)
            // })

        }

        function error(err) {
            console.log(err)
        }

        function initMap(latt, longg) {
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map_bg'), {
                center: { lat: latt + 1.354, lng:longg - 16 },
                zoom: 5,
                mapTypeControl: false,
                scaleControl: true,
                draggable: false,
                styles: [
                    {
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#ebe3cd"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#523735"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#f5f1e6"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#c9b2a6"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#dcd2be"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#ae9e90"
                        }
                      ]
                    },
                    {
                      "featureType": "landscape.natural",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#93817c"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#a5b076"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#447530"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#f5f1e6"
                        }
                      ]
                    },
                    {
                      "featureType": "road.arterial",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#fdfcf8"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#f8c967"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#e9bc62"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway.controlled_access",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#e98d58"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway.controlled_access",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#db8555"
                        }
                      ]
                    },
                    {
                      "featureType": "road.local",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#806b63"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#8f7d77"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#ebe3cd"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#b9d3c2"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#92998d"
                        }
                      ]
                    }
                  ]
            });
        
            // var image = '../images/mob_logo.png';
            var beachMarker = new google.maps.Marker({
                position: { lat: latt, lng:longg },
                map: map,
                icon: 'location_marker.svg',
                // conten 
            });
           
        }
  
        // $('.proset').slick({
        //   centerMode: true,
        //   centerPadding: '60px',
        //   slidesToShow: 3,
        //   arrows:true,
        //   responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //       }
        //     }
        //   ]
        // });
        // $('.project .proset').width($(window).width()-60);
});

$(window).resize(()=>{
  $('.project .proset').width($(window).width()-60);
})