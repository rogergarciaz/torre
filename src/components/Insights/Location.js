import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09];

export default function Location({ location }) {
  return (
    <MapContainer
      center={
        location !== undefined && location !== null
          ? [location.latitude, location.longitude]
          : position
      }
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={
          location !== undefined && location !== null
            ? [location.latitude, location.longitude]
            : position
        }
      >
        <Popup>
          {location !== undefined
            ? "Hi, I'm here"
            : "I really don't know where am I, sorry this is just a default position"}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
