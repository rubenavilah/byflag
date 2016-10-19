
function initMap() {
  var map;
  map = new google.maps.Map(document.querySelector("#map"), {
  center: {lat: 4.624335, lng: -74.063644},
  zoom: 8
  });
  console.log("Ejecuto la funcion");
}
 document.addEventListener("DOMContentLoaded", function(){
   initMap();
});
