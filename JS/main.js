var x = document.getElementById("demo");
var lat = 42.593948;
var lon = 21.624509; 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    x.innerHTML = "Geolocation is  supported by this browser.";
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    alert(lat);
}

function initMap() {
  // The location of Uluru
  alert(lat);
  const uluru = { lat: lat, lng: lon };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}