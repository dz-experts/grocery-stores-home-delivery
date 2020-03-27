import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MapContainer } from "../components/map"
import { getGeoLocation } from "../utils"

const Home = () => {
  const [position, usePosition] = useState({
    latitude: 50,
    longitude: 10,
  })

  useEffect(() => {
    getGeoLocation()
      .then((pos) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      })
      .catch((err) => {
        console.log(err); 
      })
  })
  return (
    <div className="ui container">
      <h1>Home</h1>
      <div className="ui message">
        <i className="close icon"></i>
        <div className="header">
          Welcome back!
        </div>
        <p>This is a special notification which you can dismiss.</p>
      </div>
      <Component>
        <MapContainer position={position} />
      </Component>
    </div>
  )
}

const Component = styled.section`
  height: 400px;
  width: 80%;
  margin :auto;
`

export { Home }
