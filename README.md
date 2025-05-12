# Flight Status and Weather Integration System

## Description
The Flight Status and Weather Integration System is a web application that integrates real-time flight data and aviation-specific weather data. It lets users monitor current flights, assess potential weather delays, and explore important airport information. The system's goal is to help air travelers plan more efficiently by providing actionable insights through a unified platform.

## Target Browsers
- Desktop: Chrome (latest), Firefox (latest), Safari (latest), Microsoft Edge
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
3. If using environment variables (e.g., API keys or endpoints), create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://www.aviationapi.com
   ```

### Running the Application Locally
To start the development server:
```bash
npm run dev
```
This will run the app on `http://localhost:3000`.

### Running in Production
Deploy the app using Vercel:
```bash
vercel --prod
```
Ensure your project is connected to your Vercel account.

### Testing
This project currently uses manual testing:
- Search for flights and verify results render correctly.
- Click on an airport to check that weather and charts appear.

(Optional) Automated testing can be added later using Jest or Cypress.

### API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/flight-data` | GET | Retrieves real-time flight data from `/vatsim/pilots` |
| `/api/weather/:airportCode` | GET | Fetches METAR and TAF data for a given airport |
| `/api/airport/:id` | GET | Returns detailed information about a specific airport |
| `/api/charts/:airportCode` | GET | Retrieves aeronautical charts (PDFs) for a given airport |

These endpoints power the front-end's data visualization and dashboard features.

### Known Bugs
- Incomplete or delayed data from `/vatsim/pilots` during off-peak hours
- Occasionally missing METAR data for smaller airports

### Roadmap
- Add user accounts to save flights and airports
- Implement push notifications for delay alerts
- Integrate global airport support
- Add unit and integration testing

### Folder Structure
```
Flight-Status-and-Weather-Integration-System/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── docs/
│   └── developer_manual.md
├── .env
├── README.md
└── package.json
```

### Authors
INST377 Project Group 37 - Spring 2025 - Tafrid Sadat
