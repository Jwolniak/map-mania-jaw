let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.605, lng: -88.081},
        zoom: 10,
    });
}