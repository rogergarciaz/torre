import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [69.505, -0.08];

export default function Location({ location }) {
  return (
    <>
    <MapContainer
      center={
        location !== undefined && location !== null
          ? [location.latitude, location.longitude]
          : position
      }
      zoom={20}
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
            ? "Hey, I'm over here!"
            : "I won't tell you where I am, this is just a default position"}
        </Popup>
      </Marker>
    </MapContainer>
    </>
  );
}
