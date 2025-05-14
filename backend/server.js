const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(cors());
app.use(express.json());

// Fetch weather from Weatherstack
app.get('/api/weather/:location', async (req, res) => {
  const location = req.params.location;

  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=efdd3b5aac620924ab47ca114ba85171&query=${location}`
    );

    const text = await response.text();               // Get raw response as text
    console.log("RAW Weatherstack response:", text);  // Log it to terminal

    const data = JSON.parse(text);                    // Try to parse
    res.json(data);
  } catch (err) {
    console.error("Error fetching weather:", err);
    res.status(500).json({ error: "Failed to fetch weather data." });
  }
});

// Retrieve logs from Supabase
app.get('/api/logs', async (req, res) => {
  const { data, error } = await supabase.from('logs').select('*');
  res.json({ data, error });
});

// Log weather to Supabase
app.post('/api/logs', async (req, res) => {
  const { location, weather } = req.body;
  const { data, error } = await supabase.from('logs').insert([{ location, weather }]);
  res.json({ data, error });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
