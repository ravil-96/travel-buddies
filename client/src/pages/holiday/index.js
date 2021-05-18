import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { MapSearch, Weather, MyMap, MarkerModal, CardContainer, MarkerCards, ChatBox, AddMember } from "../../components";
import { NavBar } from "../../layout"
import { useParams } from "react-router-dom"
import { useSocket } from '../../customHooks'
import { clearMarkers, loadHoliday, clearChat } from '../../actions'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

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
    dispatch(clearChat())
    console.log("reloaded")
    dispatch(loadHoliday(id))
  },[id])
  




  return (
    <>
    <NavBar />
      <Weather />
      <MarkerModal
        show={show}
        handleClose={handleClose}
        location={markerLocation}
      />
      <ButtonToolbar aria-label="Toolbar with button groups">
      <MapSearch handleClick={handleClick} />
      <AddMember />
      </ButtonToolbar>
      <div className="map-card-box">
        <MyMap handleClick={handleClick}/>
        <CardContainer>
          <MarkerCards />
        </CardContainer>
      </div>
      <ChatBox />
    </>
  );
}

export default Holiday;
