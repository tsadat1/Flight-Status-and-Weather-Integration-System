
# Developer Manual – SkyCast

## Setup Instructions
1. Clone the repository
2. `cd backend && npm install`
3. `node server.js`
4. Open `frontend/index.html` in your browser or serve it via VSCode Live Server

## API Reference
### `GET /api/weather/:icao`
Fetches METAR aviation weather data for the given ICAO airport code.

## Known Bugs
- Some airport codes may not return data
- Chart uses mock values for now

## Roadmap
- Store user favorite airports in Supabase
- Real-time METAR charting
- Location-based recommendations
