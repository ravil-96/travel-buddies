import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MarkerCards() {
  let data = [];

  const handleClick = () => {};

  const markers = useSelector((state) => state.markers);
  if (markers.length > 0) {
    data = markers;
  }
  const list = data.map((d, i) => {
    return (
      <div role="markercards">
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{d.title}</Card.Subtitle>
            <Card.Text>{d.desc}</Card.Text>
            <Button variant="primary" onClick={handleClick}>
              X
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return list;
}

export default MarkerCards;
