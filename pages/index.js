
import { useEffect, useState } from 'react';
import FlightMap from '../components/FlightMap';
import FlightChart from '../components/FlightChart';

export default function HomePage() {
  const [flights, setFlights] = useState([]);
  const [tafData, setTafData] = useState([]);

  useEffect(() => {
    fetch('/api/flight-data')
      .then((res) => res.json())
      .then((data) => setFlights(data));

    fetch('/api/weather/KJFK')
      .then((res) => res.json())
      .then((data) => {
        const chartPoints = data.taf.forecast.map((f, idx) => ({
          time: `T+${idx * 3}h`,
          windSpeed: parseInt(f.wind_speed?.kt || 0),
        }));
        setTafData(chartPoints);
      });
  }, []);

  return (
    <div>
      <h1>Flight Status & Weather Overview</h1>
      <FlightMap flights={flights} />
      <FlightChart tafData={tafData} />
    </div>
  );
}
