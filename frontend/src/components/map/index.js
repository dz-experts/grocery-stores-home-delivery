import React from "react";
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";


const MapContainer = ({ position , zoom }) => {
  return (
    <LeafletMap
      center={[position.latitude, position.longitude]}
      zoom={zoom}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[position.latitude, position.longitude]}></Marker>
    </LeafletMap>
  )
}

export { MapContainer }
