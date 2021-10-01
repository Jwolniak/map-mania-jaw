let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.605, lng: -88.081},
        zoom: 10,
    });

    var marker = new google.maps.Marker({position:{lat:18.4563,lng:-77.3267}, map:map});

    var marker2 = new google.maps.Marker({position:{lat:45.6366,lng:-89.4121}, map:maps});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Rhinelander, WI'});
    marker2.addListener('click', function() {
        infoWindow.open(map, marker2);
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