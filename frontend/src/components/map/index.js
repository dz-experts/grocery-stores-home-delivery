import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {geoLocation} from '../../utils/geolocation';
import styled from 'styled-components';

const MapContainer = (props) => {
    geoLocation()
    return (
        <Container>
            <LeafletMap
            center={[50, 10]}
            zoom={6}
            maxZoom={10}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
                <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                    <Marker position={[50, 10]}>
                        <Popup>
                            Popup for any custom information.
                        </Popup>
                    </Marker>
            </LeafletMap>
        </Container>
    )
}

const Container = styled.div`
    height: 400px;
    width: 100%;
`


export {MapContainer};
