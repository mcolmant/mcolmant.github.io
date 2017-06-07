var map = L.map('map').setView([50.63309, 3.02029], 18);
// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([50.63309, 3.02029]).addTo(map)
  .bindPopup("<strong>Euratechnologies</strong><br>165, Avenue de Bretagne<br>59000 Lille - France<br>")
  .openPopup();
