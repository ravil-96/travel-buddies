import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function HolidayCards() {
  let data = [];
  const holidays = useSelector((state) => state.user.holidays);
  if (holidays.length > 0) {
    data = holidays;
  }
  const list = data.map((d) => <Link to={`/holidays/${d.id}`}>{d.title}</Link>);
  return (
    <>
      <b>My Holidays</b>
      {list}
    </>
  );
}

export default HolidayCards;
