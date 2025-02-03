<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte Pivot d'Irrigation</title>
    <style>
        #map {
            width: 100%;
            height: 500px;
        }
    </style>
</head>
<body>
    <h1>Carte avec Pivot d'Irrigation</h1>
    <div id="map"></div>

    <script>
        // Initialiser la carte OpenStreetMap via Leaflet.js
        var map = L.map('map').setView([48.8566, 2.3522], 13); // Latitude et Longitude de départ

        // Ajouter le fond de carte OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Fonction pour ajouter les points et éléments
        function addPivotAndTracker(originLat, originLon, trackerLat, trackerLon) {
            // Ajouter le marqueur pour le point d'origine
            var originMarker = L.marker([originLat, originLon]).addTo(map);
            originMarker.bindPopup("Point d'origine");

            // Ajouter le marqueur pour le tracker GPS
            var trackerMarker = L.marker([trackerLat, trackerLon]).addTo(map);
            trackerMarker.bindPopup("Tracker GPS");

            // Ajouter une ligne entre les deux points
            var latlngs = [
                [originLat, originLon],
                [trackerLat, trackerLon]
            ];
            var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);

            // Ajouter un cercle autour du point d'origine pour représenter le pivot d'irrigation
            var circle = L.circle([originLat, originLon], {radius: 500, color: 'green', fillColor: '#32CD32', fillOpacity: 0.5}).addTo(map);
            circle.bindPopup("Zone du Pivot");
        }

        // Exemple de coordonnées dynamiques
        var originLat = 48.8566;  // Exemple de latitude pour le point d'origine
        var originLon = 2.3522;   // Exemple de longitude pour le point d'origine
        var trackerLat = 48.8600; // Exemple de latitude pour le tracker
        var trackerLon = 2.3530;  // Exemple de longitude pour le tracker

        // Appeler la fonction pour ajouter les éléments à la carte
        addPivotAndTracker(originLat, originLon, trackerLat, trackerLon);
    </script>

    <!-- Intégration de Leaflet.js -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
</body>
</html>
