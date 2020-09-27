var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoiY2hhcmNvcyIsImEiOiJja2FuNXE5YXUxbGRyMnFuc3c5dzRkamkxIn0.2IEQgoBPJmtVyxaXuGxBAQ"
    });

var myMap = L.map("main_map", {
    layers: [lightmap]
}).setView([25.40,-100.18], 5);

var cities = [
  {
    location: [24.08, -110.18],
    name: "La Paz"
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston"
  },
  {
    location: [29.05, -110.57],
    name: "Hermosillo"
  }];

  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.location)
      .addTo(myMap);
  }
