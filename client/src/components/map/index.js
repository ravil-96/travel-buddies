import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

// this component maps an array of marker data (position, title, desc) to react-leaflet components
// currently passed as a prop but we should move that logic to redux
function MapContent({ data }) {
  
  return data.map((d) => {
    return (
      <Marker position={d.position}>
        <Popup>
          {d.title} <br /> {d.desc}
        </Popup>
      </Marker>
    );
  });
}

// this handles adding new markers on click, it receives a 'handleClick prop' which passes the data back
// to the parent and adds updates the state in the parent
function AddMarker({ handleClick }) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      handleClick({ position: [lat, lng], title: "new marker", desc: "..." });
    },
  });
  return null;
}

// the parent componenet that renders the leaflet map
function MyMap() {
  // some initial data that is sent as prop to child componenet and mapped to leaflet markers
  const [data, setData] = useState([
    {
      title: "London",
      desc: "city of London",
      position: [51.505, -0.09],
    },
    {
      title: "London Bridge",
      desc: "city of Londons bridge",
      position: [51.205, -0.03],
    },
  ]);

  // the function to update state which is sent to the AddMarker componenet
  // again this can be moved elsewhere as it becomes more complex
  function handleClick(newMarker) {
    const newData = [...data, newMarker];
    setData(newData);
  }

  

  return (
    <>
      <MapContainer
        onclick={() => console.log("hello")}
        style={{ height: "480px", width: "100%" }}
        // default center point of map, we can have a default and then grab it from any markers that have been added
        center={[51.505, -0.09]}
        // default zoom level, smaller = zoomed out more 
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarker handleClick={handleClick} />
        <MapContent data={data} />
      </MapContainer>
    </>
  );
}

export default MyMap;
