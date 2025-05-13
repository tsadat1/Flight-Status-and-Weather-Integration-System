async function fetchWeather() {
    const icao = document.getElementById('icaoInput').value;
    const res = await fetch(`http://localhost:3001/api/weather/${icao}`);
    const data = await res.json();

    // Mock chart example
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

    const map = L.map('map').setView([40.6413, -73.7781], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([40.6413, -73.7781]).addTo(map).bindPopup(`${icao} Airport`).openPopup();
}

async function saveFavorite() {
    const icao = document.getElementById('icaoInput').value.toUpperCase();
    const res = await fetch('http://localhost:3001/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ icao })
    });

    if (res.ok) {
        alert(`Saved ${icao} to favorites!`);
        loadFavorites();
    } else {
        alert('Failed to save favorite.');
    }
}

async function loadFavorites() {
    const res = await fetch('http://localhost:3001/api/favorites');
    const data = await res.json();

    const list = document.getElementById('favoritesList');
    list.innerHTML = '';
    data.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry.icao;
        list.appendChild(li);
    });
}

window.onload = loadFavorites;
