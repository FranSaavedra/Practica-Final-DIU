function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(37.19234869030891, -3.616241365671158), zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(37.19234869030891, -3.616241365671158),
    map: map,
    title: 'Automóviles Granada'
  });
}