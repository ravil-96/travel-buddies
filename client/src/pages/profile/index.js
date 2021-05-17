import React, { useEffect } from "react";
import { MyMap, NewHolidayButton, HolidayCards, CardContainer } from "../../components"
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
