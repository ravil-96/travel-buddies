import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { MapSearch, Weather, MyMap, MarkerModal } from "../../components";
import { useParams } from "react-router-dom"
import { useSocket } from '../../customHooks'

function Holiday() {
  const { id } = useParams()
  useSocket(id)
  const mySocket = useSelector(state => state.user.socket) 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // the function to update state which is sent to the AddMarker componenet
  // again this can be moved elsewhere as it becomes more complex
  const [markerLocation, setMarkerLocation] = useState(['',''])
  function handleClick(location) {
    console.log(location)
    setMarkerLocation(location)
    handleShow()
  }

  function handleSocketMarker(){
      mySocket.emit("add marker");
  }


  return (
    <>
      <Weather />
      <MyMap handleClick={handleClick}/>
      <MarkerModal show={show} handleClose={handleClose} location={markerLocation} />
      <MapSearch />
      <button onClick={handleSocketMarker}>click</button>
    </>
  );
}

export default Holiday;
