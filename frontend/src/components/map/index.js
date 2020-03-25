import React , {useEffect} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


import styled from 'styled-components';

const MapContainer = (props) => {
    return (
        <LeafletMap
            center={[5,10]}
            zoom={6}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
                    <TileLayer
                    url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[50, 10]}>
                        
                    </Marker>
        </LeafletMap>
    )
}




export {MapContainer};
