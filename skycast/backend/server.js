
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = 'https://aviationweather.gov/api/data/metar?format=json&ids=';

app.get('/api/weather/:icao', async (req, res) => {
    try {
        const icao = req.params.icao.toUpperCase();
        const response = await fetch(`${BASE_URL}${icao}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
