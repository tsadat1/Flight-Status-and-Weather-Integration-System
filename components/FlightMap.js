
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function FlightMap({ flights }) {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {flights.map((flight, i) => (
        <Marker key={i} position={[flight.latitude, flight.longitude]}>
          <Popup>{`${flight.callsign} - ${flight.departure} to ${flight.arrival}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
