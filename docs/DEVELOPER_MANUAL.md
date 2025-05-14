# Developer Manual: Flight Status and Weather Integration System

This manual is designed to guide future developers on how to set up, run, and extend the Flight Status and Weather Integration System.

---

## 📁 Project Overview

This system allows users to:
- Search weather data for any city using the Weatherstack API.
- Visualize the temperature and "feels like" data in a bar chart.
- Log weather entries into a Supabase database via a backend API.
- Access and retrieve weather logs through a RESTful endpoint.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript (with Chart.js)
- **Backend**: Node.js, Express
- **Database**: Supabase (PostgreSQL + API layer)
- **External API**: Weatherstack (https://weatherstack.com)
- **Deployment**:
  - Frontend: [Vercel](https://vercel.com)
  - Backend: [Render](https://render.com)

---

## 🚀 Installation & Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Backend Setup (`/backend`)

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_or_service_key
PORT=3001
```

### 3. Frontend Setup (`/frontend`)

No build needed — files are static. You can run locally with any static server or Live Server extension in VS Code.

---

## ▶️ Running the Project Locally

### Start Backend

```bash
cd backend
node server.js
```

### Open Frontend

Open `frontend/weather.html` in your browser or launch it using Live Server.

---

## 📡 API Endpoints (Backend)

### `GET /api/weather/:location`
- **Description**: Fetches current weather for a given city.
- **Source**: Weatherstack API
- **Returns**:
```json
{
  "current": {
    "temperature": 15,
    "feelslike": 14,
    ...
  }
}
```

---

### `POST /api/logs`
- **Description**: Saves a weather log to the Supabase database.
- **Body**:
```json
{
  "location": "new york",
  "weather": {
    "temperature": 15,
    "feelslike": 14,
    ...
  }
}
```
- **Returns**:
```json
{
  "data": [...],
  "error": null
}
```

---

### `GET /api/logs`
- **Description**: Retrieves all saved weather logs from Supabase.
- **Returns**:
```json
{
  "data": [
    {
      "id": 1,
      "location": "new york",
      "weather": {
        "temperature": 15,
        ...
      },
      "created_at": "2025-05-13T23:30:00Z"
    }
  ],
  "error": null
}
```

---

## 🧪 Testing the System

- Use `weather.html` to interactively test both API calls (weather lookup and log submission).
- Or use `curl`/Postman:

**Example Weather Fetch**:
```bash
curl https://weather-backend-7ffl.onrender.com/api/weather/new%20york
```

**Example Log Submission**:
```bash
curl -X POST https://weather-backend-7ffl.onrender.com/api/logs \
  -H "Content-Type: application/json" \
  -d '{"location":"new york","weather":{"temperature":15,"feelslike":14}}'
```

---

## 🐛 Known Bugs & Limitations

- No user authentication — anyone can log or retrieve weather.
- Duplicate logs are allowed.
- Weatherstack API may return rate-limit errors on the free plan.
- Chart resets with each new search (no log history page yet).

---

## 🛣️ Roadmap for Future Development

- Add login system using Supabase Auth.
- Build a `/logs.html` page to display historical entries.
- Filter logs by city or date.
- Improve mobile styling and accessibility.
- Add unit/integration tests with Jest or Postman collections.

---

## 🔐 Deployment Notes

### Frontend (Vercel)

- **Root Directory**: `frontend`
- No build or start commands required
- Push to `main` branch triggers auto-deploy

### Backend (Render)

- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- Add environment variables via Render dashboard:
  - `SUPABASE_URL`
  - `SUPABASE_KEY`

---

## 👨‍💻 Maintainers

- [Your Name](https://github.com/your-username)
- INST 377 Project Group — Spring 2025
