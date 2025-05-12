
# Flight Status and Weather Integration System

## Description
The Flight Status and Weather Integration System is a web application that integrates real-time flight data and aviation-specific weather data. It allows users to monitor current flights, assess potential weather delays, and explore key airport information. The goal is to help travelers plan smarter by providing unified, real-time insights.

## Target Browsers
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Android Chrome

## Developer Manual

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tsadat1/Flight-Status-and-Weather-Integration-System.git
   cd Flight-Status-and-Weather-Integration-System
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://aviationapi.com
   ```

### Running Locally
```bash
npm run dev
```
App will be served at `http://localhost:3000`.

### Deployment
See `docs/vercel_deploy.md` for Vercel deployment instructions.

## API Endpoints

| Endpoint                         | Method | Description                                       |
|----------------------------------|--------|---------------------------------------------------|
| `/api/flight-data`              | GET    | Gets live flight data from VATSIM                |
| `/api/weather/[airportCode]`    | GET    | Gets METAR + TAF weather for specified airport   |
| `/api/airport/[id]`             | GET    | Retrieves airport information                    |
| `/api/charts/[airportCode]`     | GET    | Gets aeronautical charts for a given airport     |

## JavaScript Libraries Used
- `Leaflet.js` — map display for flights
- `Chart.js` — weather chart visualizations

## Fetch API Usage
```js
fetch('/api/flight-data')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Application Pages

- **Home Page** — flight map + wind forecast chart
- **Flight Dashboard** — planned list of live flights
- **Airport Info** — METAR/TAF, elevation, charts
- **Weather Insights** — guide to aviation weather codes
- **About / Help Pages** — static information and glossary

## Folder Structure
```
Flight-Status-and-Weather-Integration-System/
├── pages/
│   ├── api/
│   └── index.js
├── components/
│   ├── FlightMap.js
│   └── FlightChart.js
├── docs/
│   ├── vercel_deploy.md
│   └── test_plan.md
├── public/
├── .env
├── README.md
└── package.json
```

## Known Bugs
- Sometimes `/vatsim/pilots` returns no data
- TAF/forecast may be incomplete at small airports

## Authors
INST377 Project Group 37 – Spring 2025 – Tafrid Sadat
