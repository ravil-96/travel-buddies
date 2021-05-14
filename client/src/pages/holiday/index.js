import React from "react";

function Holiday() {
  
  function fetchLocation() {
    return;
  }

  const YOUR_API_KEY = "YW2K9K5RYO7KkFhmAyNq";

  const url = `https://geocoder.ls.hereapi.com/search/6.2/geocode.json
?languages=en-US
&maxresults=4
&searchtext=Sunnyvale
&apiKey=${YOUR_API_KEY}`;

  axios.get(url);

  return (
    <div>
      <h1>Profile page</h1>;
      <form>
        <input type="search" />
      </form>
      <button onClick={fetchLocation}></button>
      
    </div>
  );
}

export default Holiday;
