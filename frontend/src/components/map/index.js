import React  from 'react';
import { Map as LeafletMap, TileLayer, Marker} from 'react-leaflet';


import styled from 'styled-components';

const MapContainer = (props) => {
    return (
        <LeafletMap
            center={[props.position.latitude, props.position.longitude]}
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
                    <Marker position={[props.position.latitude, props.position.longitude]}>
                    </Marker>
        </LeafletMap>
    )
}




export {MapContainer};
