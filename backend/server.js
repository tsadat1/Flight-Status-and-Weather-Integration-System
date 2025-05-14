const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Use node-fetch for Node v18+
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3001;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(cors());
app.use(express.json());

// Get weather data from Weatherstack
app.get('/api/weather/:location', async (req, res) => {
  const location = req.params.location;

  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=efdd3b5aac620924ab47ca114ba85171&query=${location}`
    );

    const text = await response.text();
    console.log("RAW Weatherstack response:", text);

    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    console.error("Error fetching weather:", err);
    res.status(500).json({ error: "Failed to fetch weather data." });
  }
});

// Get all logs from Supabase
app.get('/api/logs', async (req, res) => {
  const { data, error } = await supabase.from('logs').select('*');
  res.json({ data, error });
});

// Insert log into Supabase
app.post('/api/logs', async (req, res) => {
  const { location, weather } = req.body;

  console.log("🔁 Inserting to Supabase:", { location, weather });

  const { data, error } = await supabase.from('logs').insert([{ location, weather }]);

  if (error) {
    console.error("❌ Supabase Insert Error:", error);
  }

  res.json({ data, error });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
