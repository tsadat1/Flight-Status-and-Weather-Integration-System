import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const planeIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Plane_icon.svg',
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -10],
});

export default function FlightMap({ flights }) {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {flights.map((flight, i) => (
        <Marker
          key={i}
          position={[flight.latitude, flight.longitude]}
          icon={planeIcon}
        >
          <Popup>
            {`${flight.callsign} - ${flight.departure} to ${flight.arrival}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
