import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchUsers } from "../../api"

function DropdownList( { items } ){
  function handleHandleClick(data){
  
    console.log(data)
  }
  const list = items.map((d, i) => {
    return (
      <Dropdown.Item onClick={() => handleHandleClick(d)} key={i}>
        {d.username}
      </Dropdown.Item>
    );
  });
  return list;
  
}


export default function MapSearch() {
  const [userquery, setUserquery] = useState("")
  const [userdata, setUserdata] = useState([])


  function handleInput(e) {
    fetchLocation(e.target.value)
  }

  async function fetchLocation(query) {
    if (query.length < 1) {setUserdata([])}
    else {
        const data = await fetchUsers(query)
        console.log(data)
        if (data) {setUserdata(data)}  
    }
  }

  return (
    <Dropdown style={{zIndex: '1001'}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic-search">Add user +</Dropdown.Toggle>
        <Dropdown.Menu style={{padding: '0.5rem'}}>
        <Form onSubmit={(e) => {e.preventDefault()}}>
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            style={{padding: '0', paddingLeft: '0.5rem'}}
            required
            autoComplete={"off"}
            type="search"
            placeholder="Enter username"
            onChange={handleInput}
          />
        </Form.Group>
        </Form>
          <DropdownList  items={userdata} />


      
          </Dropdown.Menu>    
        </Dropdown>
  );
}
