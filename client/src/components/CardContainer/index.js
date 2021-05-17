import React from "react";
import Card from "react-bootstrap/Card";

function CardContainer(){
    return (
      <div className="card-container-wrapper">
        <Card style={{ width: "10rem", height: "5rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Central Park
            </Card.Subtitle>
            <Card.Text>We should visit Central Perk Cafe too!</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem", height: "5rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Empire State Building
            </Card.Subtitle>
            <Card.Text>Let's get tickets</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem", height: "5rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Empire State Building
            </Card.Subtitle>
            <Card.Text>Let's get tickets</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}
export default CardContainer;