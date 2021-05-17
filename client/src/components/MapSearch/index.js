import React, { useState } from "react";
import axios from "axios";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import DropdownItem from "./DropdownItem";
// import DropdownMenu from "./DropdownMenu";

export default function MapSearch() {
  const [location, setLocation] = useState();
  const [locationData, setLocationData] = useState("")

  const apikey = "d2acbb92755fc59c7e8cebb0e4dc2282";

  function handleSearch(e) {
    // console.log(e.target.value);
    setLocation(e.target.value);
    fetchLocation();
  }

  async function fetchLocation(e) {
    e.preventDefault();
    const url = `http://api.positionstack.com/v1/forward?access_key=${apikey}&query=${location}`;

    const data = await axios.get(url);
    const latitude = data.data.data[0].latitude;
    const longitude = data.data.data[0].longitude;
    // console.log(latitude, longitude);
    console.log(data.data.data);
    // console.log(data.data.data[0].label)
    // console.log(data.data.data[1].label);
    // console.log(data.data.data[2].label);
    // console.log(data.data.data[3].label);
    // console.log(data.data.data[4].label);
    // console.log(data.data.data[5].label);
    // console.log(data.data.data[6].label);
    // console.log(data.data.data[7].label);
//     const mapData = data.data.data.map((element) => ({
//        data: element.label
//           }))
// console.log(mapData)
setLocationData(data.data.data)
  }
  return (
    <div>
      <Form onSubmit={fetchLocation}>
        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">{mapData[0].location}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{mapData[0].location}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Search destination</Form.Label>
          <Form.Control
            required
            type="search"
            placeholder="Enter location"
            onChange={handleSearch}
            value={location}
          />
          <Dropdown.Item href="#/action-1">Something else</Dropdown.Item>
        </Form.Group>
        <Button variant="primary" type="submit" value="search">
          Search
        </Button>

        {/* </DropdownButton> */}
      </Form>
    </div>
  );
}
