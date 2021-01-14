import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [51.505, -0.09];

export default function Map({ location }) {
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
      {location.map((item,i) => 
      <Marker
        position={
          item.location !== undefined && item.location !== null
            ? [item.location.latitude, item.location.longitude]
            : position
        }
      >
        <Popup>
          {item.location !== undefined
            ? "Hey, Come get me"
            : "I know nothing, this is just a default position"}
        </Popup>
      </Marker>
      )}
    </MapContainer>
  );
}


//http://api.positionstack.com/v1/forward?access_key=7d07d8c52f4021484fe4d379d67c5082&query=Barranquilla%2CAtlantico&output=json&limit=1

//http://api.positionstack.com/v1/forward?access_key=7d07d8c52f4021484fe4d379d67c5082&query=Barranquilla%20Atlantico

//http://api.positionstack.com/v1/forward?access_key=7d07d8c52f4021484fe4d379d67c5082&query=Barranquilla%2CAtlantico