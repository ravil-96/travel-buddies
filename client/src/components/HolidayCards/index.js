import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
 
function HolidayCards() {
  let data = [];
  const holidays = useSelector((state) => state.user.holidays);
  if (holidays.length > 0) {
    data = holidays;
  }

  const list = data.map((d) => {
    return (
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            <Link to={`/holidays/${d.id}`}>{d.title}</Link>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    );
  });
  return list ;
}

export default HolidayCards;
