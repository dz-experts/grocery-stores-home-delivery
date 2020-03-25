import React , { useEffect }from "react";
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
      <MapContainer position={state.position}/>
    </div>
  );
};

export { Home };
