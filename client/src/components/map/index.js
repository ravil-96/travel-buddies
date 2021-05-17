import React, { useState } from "react";
import { useSelector } from "react-redux"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

// this component maps an array of marker data (position, title, desc) to react-leaflet components
// currently passed as a prop but we should move that logic to redux
function MapContent() {
  let data = []
  const markers = useSelector((state) => state.markers)
  if (markers.length > 0) {data=markers}
  return data.map((d, i) => {
    return (
      <Marker key={i} position={d.position}>
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
      handleClick([lat, lng]);
    },
  });
  return null;
}

// the parent componenet that renders the leaflet map
function MyMap( { handleClick } ) {
  // some initial data that is sent as prop to child componenet and mapped to leaflet markers

  return (
    <>
      <MapContainer
        onclick={() => console.log("hello")}
        style={{ height: "480px", width: "100%" }}
        center={[0,0]}
        zoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarker handleClick={handleClick} />
        <MapContent />
      </MapContainer>
    </>
  );
}

export default MyMap;
