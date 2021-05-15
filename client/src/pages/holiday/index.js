import React, { useState } from "react";
import axios from "axios";

function Holiday() {
  const [location, setLocation] = useState('');

 const apikey = "d2acbb92755fc59c7e8cebb0e4dc2282";

  function handleSearch(e) {
    setLocation(e.target.value);
  }

  async function fetchLocation(e) {
    e.preventDefault()
    const url = `http://api.positionstack.com/v1/forward?access_key=${apikey}&query=${location}`
    
    const data  = await axios.get(url)
    const latitude = data.data.data[0].latitude;
    const longitude = data.data.data[0].longitude;

    console.log(data.data.data[0])
    console.log(data.data.data);
    console.log(latitude, longitude)
  }

 

  

  return (
    <div>
      <h1>My holiday</h1>
      <form onSubmit={fetchLocation}>
        <input type="search" onChange={handleSearch} value={location} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}

export default Holiday;
