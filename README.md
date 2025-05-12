
# Flight Status and Weather Integration System

## Description
The Flight Status and Weather Integration System is a responsive web application that integrates real-time flight data and aviation-specific weather data. It allows users to monitor current flights, assess potential weather-related delays, and explore detailed airport information. The system aims to help air travelers plan more efficiently by providing actionable insights through a unified platform.

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

### Supabase Database Schema

**Table: SavedFlights**
- `id` (uuid, primary key, default: uuid_generate_v4())
- `user_id` (text) – ID from user auth (optional future expansion)
- `flight_number` (text)
- `departure_airport` (text)
- `arrival_airport` (text)
- `saved_at` (timestamp, default: now())

**Table: WeatherLogs**
- `id` (uuid, primary key)
- `airport_code` (text)
- `metar` (json)
- `taf` (json)
- `logged_at` (timestamp, default: now())

These tables enable caching of weather data and saving flight preferences for users.

### Supabase Setup Instructions

1. Go to [Supabase](https://supabase.com/) and sign in.
2. Create a new project with a unique name.
3. After project setup, go to the **SQL Editor** tab.
4. Copy and paste the contents of [`supabase_schema.sql`](sandbox:/mnt/data/supabase_schema.sql) and click **Run**.
5. Go to **Project Settings > API**:
   - Copy the `anon` public API key
   - Copy the `project URL`
6. In your project’s `.env` file, add the following lines:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   ```
7. Install the Supabase JavaScript client:
   ```bash
   npm install @supabase/supabase-js
   ```
8. Create a helper file to initialize Supabase (e.g., `utils/supabaseClient.js`):
   ```js
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY;

   export const supabase = createClient(supabaseUrl, supabaseKey);
   ```
9. Example fetch from Supabase:
   ```js
   import { supabase } from '../utils/supabaseClient';

   const fetchSavedFlights = async () => {
     const { data, error } = await supabase.from('SavedFlights').select('*');
     if (error) console.error('Error:', error);
     return data;
   };
   ```

You can also recreate these tables using the provided SQL script:
[Download supabase_schema.sql](sandbox:/mnt/data/supabase_schema.sql)

### Known Bugs
- Incomplete or delayed data from `/vatsim/pilots` during off-peak hours
- Occasionally missing METAR data for smaller airports

### Roadmap
- Add user accounts to save flights and airports
- Implement push notifications for delay alerts
- Integrate global airport support
- Add unit and integration testing

### JavaScript Libraries Used

- **Leaflet.js** – Used to display interactive maps with flight and weather overlays
- **Chart.js** – Used to visualize METAR/TAF weather trends and historical flight data

### Fetch API Usage

Our application uses `fetch()` to retrieve data from both internal and external endpoints. Example calls include:

```js
// Fetch live flight data
fetch('/api/flight-data')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch METAR and TAF weather for a specific airport
fetch('/api/weather/KJFK')
  .then(res => res.json())
  .then(data => displayWeather(data));
```

These calls support dynamic page content without requiring reloads, enabling a seamless user experience.

### Application Pages

#### Home Page
- Interactive map showing flights in real time
- Weather impact indicators on airports
- Search bar for flight or airport lookup

#### About Page
- Mission of the app
- Explanation of how weather affects aviation
- Team background and technology stack

#### Flight Dashboard
- List view of live flights
- Weather categories (IFR/VFR)
- Delays based on METAR/TAF

#### Airport Info Page
- Airport details (name, location, elevation)
- Latest METAR and TAF reports
- Aeronautical chart PDF links

#### Weather Insights Page
- Educational guide on METAR and TAF codes
- Visualized patterns and trends using Chart.js

#### Help Page
- How to use the app
- Explanation of flight/weather symbols
- Glossary of aviation terms

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
