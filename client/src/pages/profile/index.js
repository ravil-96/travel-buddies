import React, { useEffect } from "react";
import {
  MyMap,
  NewHolidayButton,
  HolidayCards,
  CardContainer,
} from "../../components";
import { NavBar, Footer } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { loadUserHolidays } from "../../actions";
import './style.css'

function Profile() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  useEffect(() => {
    dispatch(loadUserHolidays(id));
  }, []);
  return (
    <div role="ProfilePage" id="profile-page">
      <NavBar />
      <h4 id="profile-welcome-message">Hi user,</h4>
      
      
      <div className="map-card-box">
        
        <CardContainer>
          <p id="holidays-title">Holidays</p>
          <HolidayCards />
          <NewHolidayButton />
        </CardContainer>
        <MyMap />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
