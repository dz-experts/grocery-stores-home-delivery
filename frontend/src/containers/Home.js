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
        console.log(err)
      })
  })
  return (
    <div>
      <Component>
        <MapContainer position={position} />
      </Component>
    </div>
  )
}

const Component = styled.section`
  height: 400px;
  width: 100%;
`

export { Home }
