import React from "react"
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet"
import styled from "styled-components"

const MapContainer = ({ position }) => {
  return (
    <LeafletMap
      center={[5, 10]}
      zoom={6}
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
