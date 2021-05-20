import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { MapSearch, MyMap, MarkerModal, CardContainer, MarkerCards, ChatBox, AddMember, MembersList } from "../../components";
import { Header, NavBar, Footer } from "../../layout"
import { useParams } from "react-router-dom"
import { useSocket } from '../../customHooks'
import { clearMarkers, loadHoliday, clearChat, loadMembers, clearHoliday } from '../../actions'
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
      dispatch(clearHoliday())
      dispatch(loadHoliday(id))
      dispatch(loadMembers(id))
    }
  },[id])
  
  const holiday = useSelector(state => state.holiday)
  return (
    <>
      <NavBar />
      <ButtonToolbar >
      <h4 style={{padding: '0'}} id="profile-welcome-message">{holiday}</h4>     
      <div className="toolbar">
          <MapSearch handleClick={handleClick} />   
          <AddMember />
          <MembersList />
          </div>
        </ButtonToolbar>
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
          </CardContainer>
        </div>

        <ChatBox />
      </div>
      <Footer />
    </>
  );
}

export default Holiday;
