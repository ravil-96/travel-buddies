import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
 
function MarkerCards() {

        let data = []
        const markers = useSelector((state) => state.markers)
        if (markers.length > 0) {data=markers}
        const list = data.map((d, i) => {
          return (
            <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {d.title}
              </Card.Subtitle>
              <Card.Text>
                  {d.desc}
              </Card.Text>
            </Card.Body>
          </Card>
          );
      }
    )
    return list
}

export default MarkerCards;
