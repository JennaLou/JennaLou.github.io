var map
var infowindow

function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)
  var marker = new google.maps.Marker({
          position: latLng,
          map: map
        })

        google.maps.event.addListener(marker, 'click', function(){
          infowindow.setContent("<div class='content'>" + content + "</div>");
          infowindow.open(map,marker);
        })
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:34.1478, lng: -118.1445}, // Where do I want my map centered?
    zoom: 5
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })

   createMarker(46.2276, 2.2137, "Paris, France <br><img src='images/paris.jpg'>")
   createMarker(19.8968, -155.5828, "Honolulu, Hawaii <br><img src='images/honolulu.jpg'>")
   createMarker(41.8719, 12.5674, "Rome, Italy <br><img src='images/rome.jpg'>")
   createMarker(23.6345, -102.5528, "Cancun, Mexico <br><img src='images/cancun.jpg'>")
   createMarker(36.2048, 138.2529, "Honshu, Japan <br><img src='images/mount.jpg'>")
}
