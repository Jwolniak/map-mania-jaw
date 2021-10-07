var myMap;

function initMap() {
    myMap = new google.maps.Map(document.getElementById("mapID"), {
        center: {lat: 41.605, lng: -88.081},
        zoom: 13,
    });

    var marker = new google.maps.Marker({position:{lat:18.4563,lng:-77.3267}, map:myMap});

    var marker2 = new google.maps.Marker({position:{lat:45.6366,lng:-89.4121}, map:myMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Rhinelander, WI'});
    marker2.addListener('click', function() {
        infoWindow.open(myMap, marker2);
    });

    google.maps.event.addListener(map, 'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = map.getZoom();
    var inBounds= false;

    if (map.getBounds.contains({lat:18.4563,lng:-77.3267})) {
        inBounds = true;
    }

    console.log("inbounds:"+inBounds+" zoomLevel:"+zoomLevel);
}