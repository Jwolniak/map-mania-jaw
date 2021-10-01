let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.605, lng: -88.081},
        zoom: 10,
    });

    var marker = google.maps.Marker({position:{lat:18.4563,lng:-77.3267}, map:map});
}