var asdasd=[];
function obtengoPosicion(coordenadas){
    let lat=coordenadas.coords.latitude;
    let lon=coordenadas.coords.longitude;

    var map = L.map('map').setView([lat, lon], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lat, lon]).addTo(map)
}
navigator.geolocation.getCurrentPosition(obtengoPosicion);



