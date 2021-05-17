import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { MapSearch, Weather, MyMap, MarkerModal, CardContainer } from "../../components";
import { useParams } from "react-router-dom"
import { useSocket } from '../../customHooks'
import { clearMarkers, loadHoliday } from '../../actions'

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

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearMarkers())
    // dispatch(clearChat())
    console.log("reloaded")
    dispatch(loadHoliday(id))
  },[id])
  




  return (
    <>
      <Weather />
      <MyMap handleClick={handleClick}/>
      <MarkerModal show={show} handleClose={handleClose} location={markerLocation} />
      <MapSearch handleClick={handleClick} />
      <CardContainer />
    </>
  );
}

export default Holiday;
