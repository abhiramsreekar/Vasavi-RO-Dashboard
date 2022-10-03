import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Nodemap.css"

function Nodemap() {
  return (
    <div className="map">
      <MapContainer center={[17.380582898015582, 78.38295620365147]} zoom={20} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[17.38072398593201, 78.38210668675428]}>
            <Popup>
                Temp:<br /> pm2.5:<br/> pm10:<br/> AQI:
            </Popup>
        </Marker>
        <Marker position = {[17.38107775814958,78.3825347550203]}>
            <Popup>
                Temp:<br /> pm2.5:<br/> pm10:<br/> AQI:
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Nodemap;
