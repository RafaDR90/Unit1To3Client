let todasLasCords = [];
let distanciaTotal = 0;

function obtengoPosicion(coordenadas){
    let lat=coordenadas.coords.latitude;
    let lon=coordenadas.coords.longitude;

    if (todasLasCords.length > 0) {
        const latAnterior = todasLasCords[todasLasCords.length - 1].latitud;
        const lonAnterior = todasLasCords[todasLasCords.length - 1].longitud;
        const distanciaMetros = calcularDistancia(latAnterior, lonAnterior, lat, lon);
        distanciaTotal += distanciaMetros;
        console.log(`Distancia recorrida: ${distanciaTotal} metros`);
    }
    todasLasCords.push({ latitud: lat, longitud: lon });

    var map = L.map('map').setView([lat, lon], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lat, lon]).addTo(map)
}
navigator.geolocation.watchPosition(obtengoPosicion);

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio promedio de la Tierra en kilómetros

    // Convierte las coordenadas de grados a radianes
    const latitud1Rad = toRadians(lat1);
    const longitud1Rad = toRadians(lon1);
    const latitud2Rad = toRadians(lat2);
    const longitud2Rad = toRadians(lon2);

    // Diferencia en latitud y longitud
    const latitudDelta = latitud2Rad - latitud1Rad;
    const longitudDelta = longitud2Rad - longitud1Rad;

    // Calcula la distancia utilizando la fórmula del haversine
    const a =
        Math.sin(latitudDelta / 2) * Math.sin(latitudDelta / 2) +
        Math.cos(latitud1Rad) * Math.cos(latitud2Rad) *
        Math.sin(longitudDelta / 2) * Math.sin(longitudDelta / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distancia en kilómetros
    const distanciaKm = radioTierra * c;

    // Convierte la distancia a metros
    const distanciaMetros = distanciaKm * 1000;

    return distanciaMetros;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

