# Developer Manual

## Installation
1. Navigate to `backend/` and run `npm install`
2. Create a `.env` file using the template and add your Supabase keys

## Running the App
- Run the backend with `node server.js`
- Open any HTML file in `frontend/` using a Live Server or simple HTTP server

## API Endpoints
- `GET /api/weather/:location` – Fetches weather from Weatherstack
- `GET /api/logs` – Retrieves logs from Supabase
- `POST /api/logs` – Logs weather results to Supabase

## Known Bugs
- Limited error handling on API responses
- No offline support

## Roadmap
- Add autocomplete location suggestions
- Add more detailed weather charts
