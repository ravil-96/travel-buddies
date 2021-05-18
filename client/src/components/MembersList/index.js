import { useSelector } from 'react-redux'
import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from  "react-bootstrap/ListGroup";
import { FaUserFriends, FaUser } from 'react-icons/fa'

function DropdownList( ){
  const creator = useSelector(state => state.members.creator)
  const users = useSelector(state => state.members.members)
  const members = [creator].concat(users)
  console.log(members)
  const list = members.map((d, i) => {
    return (
      <ListGroup.Item style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}} key={i}>
        {d.username}<FaUser color="green"/>
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup variant="flush">
       {list}
    </ListGroup>

  );
  
}


function MembersList() {

  return (
    <Dropdown style={{zIndex: '1001'}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic-search">Holiday Members <FaUserFriends/></Dropdown.Toggle>
        <Dropdown.Menu>

          <DropdownList />
        


      
          </Dropdown.Menu>    
        </Dropdown>
  );
}

export default MembersList
