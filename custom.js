
// js for center images
$(document).ready(function () {

  
    initMap(); 
    $('.skills-modal').hide();      

});

// support JS..
function support(){
  console.log("support");
    let body = { 
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),
    }
    $.ajax({
        method:'POST',
        url:'http://35.154.202.99/support',
        data: body,
        success:function(data, success){
            $('.errorMsg').hide();
            console.log("resoponse :", data)
            $('.successMsg').html(data);
        },
        error:function(error){
            $('.errorMsg').show();
        }
    });
    return false;
}


function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 28.611661, lng:77.389203 },
        zoom: 7,
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
        position: { lat: 28.611661, lng:77.389203 },
        map: map,
        icon: 'images/clixlogix.png',
        // conten
    });
    var beachMarker1 = new google.maps.Marker({
        position: { lat: 27.565389, lng:74.052825 },
        map: map,
        icon: 'images/sh.png'
    });
    var beachMarker2 = new google.maps.Marker({
        position: { lat: 26.698393, lng:77.086417 },
        map: map,
        icon: 'images/vinove_1.png'
    });
    var infowindows = new google.maps.InfoWindow({
        content: `
        
        <div class="company">
           <figure class="img-left"><img src="images/clixlogix.png" alt="zxZx" /></figure>
           <div class="body">
                <h3>Clixlogix Technology</h3>
                <p class="designation"><i class="fa fa-user"></i>&nbsp;&nbsp;Sr. Software developer</p>
                <p class="designation"><i class="fa fa-map"></i>&nbsp;&nbsp; Sector 65, Noida - 110089</p>
                <label class="period"><i class="fa fa-calendar"></i>&nbsp;&nbsp;OCT 2017 - till (1.4 Years)</label>
           </div>
        </div>
        `
      });
      infowindows.open(map, beachMarker);
    var infowindow1 = new google.maps.InfoWindow({
        content: `
        <div class="company">
        <figure class="img-left"><img src="images/sh.png" alt="zxZx" /></figure>
           <div class="body">
                <h3>Sh-Software Pvt. Lt.</h3>
                <p class="designation"><i class="fa fa-user"></i>&nbsp;&nbsp;Software developer</p>
                <p class="designation"><i class="fa fa-map"></i>&nbsp;&nbsp;Dwarka 21, Delhi - 110059</p>
                <label class="period"><i class="fa fa-calendar"></i>&nbsp;&nbsp; JULY 2014 - OCT 2016 ( 1.8 Years)</label>
            </div>
        </div>
        `
      });
      infowindow1.open(map, beachMarker1);
      var infowindow2 = new google.maps.InfoWindow({
        content: `
        <style>
        .gm-style-iw.gm-style-iw-c{background:#f1efeb;}
        .gm-style .gm-style-iw-d {  
            overflow: hidden !important;
        }
        .company{text-align:left; padding-right:20px; padding-bottom:20px; display:table; }
        .company h3{color:#e98d58; font-size:30px;  
            font-family: 'Kaushan Script', cursive;
               font-weight: bold; margin-bottom:4px; }
        .company p{color: #447530;
            font-size: 15px;
            opacity: 1!important;
            margin-bottom: 4px;
            font-family: 'Josefin Slab', serif; 
            font-style: italic;
            font-weight: 700;}
        .company .fa{color:#e98d58; font-size:15px;}
        .company label{color:#447530; font-size:16px; font-weight:bold;font-family: 'Josefin Slab', serif;  }
        .company figure{    display: table-cell;
            vertical-align: top;
            background: #030303;
            opacity: 0.4;     width: 80px;
            text-align: center;}
        .company figure img{  }
        .company .body{display:table-cell; vertical-align:top;    padding-left: 17px; }
        </style>
        <div class="company">
        <figure class="img-left"><img src="images/vinove_1.png" alt="zxZx" /></figure>
           <div class="body">
            <h3>Vinove Services</h3>
            <p class="designation"><i class="fa fa-user"></i>&nbsp;&nbsp;Software developer</p>
            <p class="designation"><i class="fa fa-map"></i>&nbsp;&nbsp;West delhi, Delhi - 110091</p>
            <label class="period"><i class="fa fa-calendar"></i>&nbsp;&nbsp;OCT 2016 - SEPT 2017 ( 1 Year)</label>
        </div>
        </div>
        `
      });
      infowindow2.open(map, beachMarker2);


}


function skillDescribe(val){
  $('.skills-modal').show();
   $('.skills-modal').html(skills[val]);
}

var skills= {
  ng:'<h2>Angular</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 2 Years</p><p> <i class="fa fa-cog fa-spin"></i> Projects: Happy HR, Bidieye, Verikilck </p><p> <i class="fa fa-cog fa-spin"></i> last use: 1 month ago</p>',
  react:'<h2>React.js</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 1 Years</p><p> <i class="fa fa-cog fa-spin"></i> Projects: HopeJax, chef-ex</p><p> <i class="fa fa-cog fa-spin"></i> last use: 6 month ago</p>',
  node:'<h2>Node.js</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 6 Months</p><p> <i class="fa fa-cog fa-spin"></i> Projects: HopeJax, HappyHr, Veriklick</p><p> <i class="fa fa-cog fa-spin"></i> last use: 1 month ago</p>',
  css:'<h2>CSS3</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 3.7 Years</p><p> <i class="fa fa-cog fa-spin"></i> Projects: Suvari, HappyHr, HopeJax, chef-ex, Veriklick, etc</p><p> <i class="fa fa-cog fa-spin"></i> last use: 6 month ago</p>',
  d3:'<h2>D3.js</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 6 month</p><p> <i class="fa fa-cog fa-spin"></i> Projects: Humenbase, Bidieye</p>',
  html:'<h2>HTML5</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 1 Years</p><p> <i class="fa fa-cog fa-spin"></i> Projects: HopeJax, chef-ex</p><p> <i class="fa fa-cog fa-spin"></i> last use: 1 month ago</p>',
  ngx:'<h2>Bootstrap</h2><p> <i class="fa fa-cog fa-spin"></i> Relevant Ex: 1 Years</p><p> <i class="fa fa-cog fa-spin"></i> Projects: HopeJax, chef-ex</p><p> <i class="fa fa-cog fa-spin"></i> last use: 1 month ago</p>'
}