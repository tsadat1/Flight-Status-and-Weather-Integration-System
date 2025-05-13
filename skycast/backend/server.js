// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- NOAA METAR Weather API ---
const BASE_URL = 'https://aviationweather.gov/api/data/metar?format=json&ids=';

// --- Supabase Client Setup ---
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// --- Fetch Weather by ICAO ---
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

// --- Save ICAO to Supabase ---
app.post('/api/favorites', async (req, res) => {
    const { icao } = req.body;
    const { error } = await supabase.from('favorites').insert([{ icao }]);
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ message: 'Favorite saved' });
});

// --- Get All Favorite ICAOs ---
app.get('/api/favorites', async (req, res) => {
    const { data, error } = await supabase.from('favorites').select('*');
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// --- Start Server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
