var map = L.map('map').setView([50.60690, 3.15217], 15);
// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([50.60496, 3.14942]).addTo(map)
  .bindPopup("<strong>INRIA Lille France</strong><br>Office: B320<br>Parc scientifique de la Haute Borne<br>40, avenue Halley - Building B - Park Plaza<br>59650 Villeneuve d'Ascq - France<br>")
  .openPopup();
  