
// $(document).ready(function(){/* google maps -----------------------------------------------------*/
// google.maps.event.addDomListener(window, 'load', initialize);

// function initialize() {

//   /* position Rotterdam */
//   var latlng = new google.maps.LatLng(51.9234141, 4.4766712);

//   var mapOptions = {
//     center: latlng,
//     scrollWheel: false,
//     zoom: 13
//   };
  
//   var marker = new google.maps.Marker({
//     position: latlng,
//     url: '/',
//     animation: google.maps.Animation.DROP
//   });
  
//   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//   marker.setMap(map);

// };
// /* end google maps -----------------------------------------------------*/
// });


// function initialize() {
//   var myLatlng = new google.maps.LatLng(51.9234141, 4.4766712);
//   var mapOptions = {
//     zoom: 12,
//     center: myLatlng
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//   var kmlLayer = new google.maps.KmlLayer({
//      url: 'http://www.veiligstallen.nl/veiligstallen.xml'
//     // url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
//     ,
//     suppressInfoWindows: true,
//     map: map
//   });
//   //georssLayer.setMap(map);

//   google.maps.event.addListener(kmlLayer, 'click', function(kmlEvent) {
//     var text = kmlEvent.featureData.description;
//     showInContentWindow(text);
//   });

//   function showInContentWindow(text) {
//     var sidediv = document.getElementById('content-window');
//     sidediv.innerHTML = text;
//   }
// }

// google.maps.event.addDomListener(window, 'load', initialize);
function initialise() {
  console.log("initialise function begin");
    myLatlng = new google.maps.LatLng(54.559323,-3.321304);
    mapOptions = {
        zoom: 5,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    geocoder = new google.maps.Geocoder();
    infoWindow = new google.maps.InfoWindow;
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     
    xmlUrl = "veiligstallen.xml";
     
    loadMarkers();
     console.log("initialise function end");
}



google.maps.event.addDomListener(window, 'load', initialise);  
 

function loadMarkers() {
  console.log("loadMarkers");
    map.markers = map.markers || []
    downloadUrl(xmlUrl, function(data) {
        var xml = data.responseXML;
        markers = xml.documentElement.getElementsByTagName("Fietsenstalling");
        for (var i = 0; i < markers.length; i++) {
            var name = markers[i].getAttribute("Naam");
            var marker_image = markers[i].getAttribute('Gemeente');
            var id = markers[i].getAttribute("ID");
            var address = markers[i].getAttribute("address1")+"<br />"+markers[i].getAttribute("address2")+"<br />"+markers[i].getAttribute("address3")+"<br />"+markers[i].getAttribute("postcode");
            var image = {
              // url: marker_image,
              size: new google.maps.Size(71, 132),
              origin: new google.maps.Point(0, 0),
              scaledSize: new google.maps.Size(71, 132)
            };
            // Coordinaten
            // split into [0] and  [1], lat = [1] lng = [0]
            var coordinates = markers[i].getAttribute("Coordinaten");
            console.log(coordinates);
            var coordinates = "Isaac, Adri";
            coordinates = coordinates.split(",");
            var lat = coordinates[0];
            var lng = coordinates[1];
            console.log("lat" + lat);
            var point = new google.maps.LatLng( lat, lng);
            var html = "<div class='infowindow'><b>" + name + "</b> <br/>" + address+'<br/></div>';
            var marker = new google.maps.Marker({
              map: map,
              position: point,
              // icon: image, 
              title: name
            });
            map.markers.push(marker);
            bindInfoWindow(marker, map, infoWindow, html);
        }
    });
}

function downloadUrl(url,callback) {
    var request = window.ActiveXObject ?
         new ActiveXObject('Microsoft.XMLHTTP') :
         new XMLHttpRequest;
     
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            //request.onreadystatechange = doNothing;
            callback(request, request.status);
        }
    };
     
    request.open('GET', url, true);
    request.send(null);
} 
