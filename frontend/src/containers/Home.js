import React, { useEffect } from "react"
import styled from "styled-components"
import { MapContainer } from "../components/map"
import { getGeoLocation } from "../utils"

const Home = () => {
  const state = {
    position: {
      latitude:0,
      longitude:0,
    },
  }
  useEffect(() => {
    getGeoLocation()
      .then((pos) => {
        console.log(pos);
        state.position.latitude = pos.coords.latitude; // latitude fetching
        state.position.longitude = pos.coords.longitude; // longitude fetching
      })
      .catch((err) => {
        console.log(err); 
      })
  })
  return (
    <>
      <h1>Home</h1>
      <div className="ui message">
        <i className="close icon"></i>
        <div className="header">
          Welcome back!
        </div>
        <p>This is a special notification which you can dismiss.</p>
      </div>
      <Component>
        <MapContainer position={state.position} />
      </Component>
    </>
  )
}

const Component = styled.section`
  height: 400px;
  width: 80%;
  margin :auto;
`

export { Home }
