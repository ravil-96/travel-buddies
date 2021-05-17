import React, { useEffect } from "react";
import { MyMap, NewHolidayButton, HolidayCards, CardContainer } from "../../components"
import { NavBar } from "../../layout"
import { useDispatch, useSelector } from "react-redux"
import { loadUserHolidays } from "../../actions"

function Profile() {
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.id)
  useEffect(() => {
    dispatch(loadUserHolidays(id))
  },[])
  return (
  <div>
  <NavBar />
  <h1>Profile page</h1>
    <NewHolidayButton />
    <div className="map-card-box">
      <MyMap />
      <CardContainer>
          <HolidayCards />
      </CardContainer>
    </div>
  </div>
  )
}

export default Profile;
