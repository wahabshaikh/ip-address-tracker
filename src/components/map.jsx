import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const marker = new Icon({
  iconUrl: "/icon-location.svg",
});

export default function Map({ data }) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (data) {
      setPosition([data.location.lat, data.location.lng]);
    }
  }, [data]);

  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  return (
    <div className="flex-1">
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={marker} />
      </MapContainer>
    </div>
  );
}
