import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from  "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchUsers, addHolidayMember } from "../../api"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DropdownList( { items } ){
    const { id } = useParams()
    const mySocket = useSelector(state => state.user.socket)

  async function handleHandleClick(data){
    const member = await addHolidayMember({id: data.id, user_id: id})
    if (member.data == 'success')
      {mySocket.emit("add member", {room: id, username: data.username})}
  }
  const list = items.map((d, i) => {
    return (
      <ListGroup.Item style={{display: "flex", justifyContent: 'space-between'}} key={i}>
        {d.username}<Button size="sm" variant="success" onClick={() => handleHandleClick(d)}>+</Button>
      </ListGroup.Item>
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
        <Dropdown.Toggle variant="success" id="dropdown-basic-search">Add someone +</Dropdown.Toggle>
        <Dropdown.Menu>
        <Form onSubmit={(e) => {e.preventDefault()}}>
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            required
            autoComplete={"off"}
            type="search"
            placeholder="Enter username"
            onChange={handleInput}
          />
        </Form.Group>
        </Form>
        <ListGroup variant="flush">
          <DropdownList  items={userdata} />
        </ListGroup>


      
          </Dropdown.Menu>    
        </Dropdown>
  );
}
