import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return <div>Home</div>;
  }
}

const MapContainer = styled.section`
    color:white
    background-color: #333;
    height:40vh;
    width:50vw;
`;

export { MapComponent };
