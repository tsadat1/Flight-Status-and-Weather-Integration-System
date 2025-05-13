
async function fetchWeather() {
    const icao = document.getElementById('icaoInput').value;
    const res = await fetch(`http://localhost:3001/api/weather/${icao}`);
    const data = await res.json();
    // Use mock data for chart demo
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temp', 'Dew Point'],
            datasets: [{
                label: 'Weather Data',
                data: [22, 15],
                backgroundColor: ['#3498db', '#2ecc71']
            }]
        }
    });

    // Map init (Mock Location)
    const map = L.map('map').setView([40.6413, -73.7781], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([40.6413, -73.7781]).addTo(map).bindPopup(`${icao} Airport`).openPopup();
}
