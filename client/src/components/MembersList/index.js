import { useSelector } from 'react-redux'
import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from  "react-bootstrap/ListGroup";
import { FaUserFriends, FaUser } from 'react-icons/fa'

export const DropdownList = ( ) => {
  const {creator, members, currentMembers}  = useSelector(state => state.members)

  const memlist = [creator].concat(members).map(m => m.username)
  const flatcm = currentMembers.map(m => m.username)
  const cmemlist = memlist.map(m => ({username: m, online: flatcm.indexOf(m) !== -1}))
  const list = cmemlist.map((d, i) => {
    return (
      <ListGroup.Item style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}} key={i}>
        {d.username}<FaUser color={d.online ? "green" : "red"}/>
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup variant="flush">
       {list}
    </ListGroup>

  );
  
}


const MembersList = () => {

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