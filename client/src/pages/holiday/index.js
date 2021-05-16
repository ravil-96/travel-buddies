import React, { useEffect } from "react";
import { MapSearch, Weather } from "../../components";
import { useSocket } from "../../customHooks"

function Holiday() {

  useSocket('1234')

  return (
    <>
      <Weather />
      <h1>Holiday to New York🗽</h1>
      <div>
        <h4>Details</h4>
        <p>Dates: 18 Jul - 24 Jul</p>
        <p>Buddies: Fred, Hugo</p>
        <p>Weather forecast: too early to tell</p>
        <p>Notes: Flights need to be booked</p>
      </div>
      <img
        src="https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg"
        height="200px"
      />
      <MapSearch />
    </>
  );
}

export default Holiday;
