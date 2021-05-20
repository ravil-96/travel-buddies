import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { MapSearch, MyMap, MarkerModal, CardContainer, MarkerCards, ChatBox, AddMember, MembersList } from "../../components";
import { Header, NavBar, Footer } from "../../layout"
import { useParams } from "react-router-dom"
import { useSocket } from '../../customHooks'
import { clearMarkers, loadHoliday, clearChat, loadMembers } from '../../actions'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './style.css'

function Holiday() {
  const { id } = useParams()
  useSocket(id)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [markerLocation, setMarkerLocation] = useState(['',''])
  function handleClick(location) {
    console.log(location)
    setMarkerLocation(location)
    handleShow()
  }

  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(clearMarkers())
      dispatch(clearChat())
      dispatch(loadHoliday(id))
      dispatch(loadMembers(id))
    }
  },[id])
  

  return (
    <>
      <Header />     <ButtonToolbar aria-label="Toolbar with button groups">
          
          <AddMember />
          <MembersList />
        </ButtonToolbar>
      <NavBar />
      <div id="holiday-page-container">
        <MarkerModal
          show={show}
          handleClose={handleClose}
          location={markerLocation}
        />
   
        <div className="map-card-box">
          <MyMap handleClick={handleClick} />
          <CardContainer>
            <MarkerCards />
            <MapSearch handleClick={handleClick} />
          </CardContainer>
        </div>

        <ChatBox />
        <Footer />
      </div>
    </>
  );
}

export default Holiday;
