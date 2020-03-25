import React , { useEffect }from "react";
import styled from 'styled-components';
import { MapContainer } from '../components/map';
import {getGeoLocation} from '../utils/geolocation';


const Home = () => {
  const state = {
    position:{
    
    }
  }
  useEffect(()=>{
      getGeoLocation()
        .then(pos => {
          state.position.latitude = pos.coords.latitude;
          state.position.longitude = pos.coords.longitude;
        })
        .catch(err => {
          console.log(err);
        })
  })
  return (
    <div>
      <Component>
        <MapContainer position={state.position}/>
      </Component>
    </div>
  );
};

const Component = styled.section`
  height: 400px;
  width: 100%;
`;

export { Home };
