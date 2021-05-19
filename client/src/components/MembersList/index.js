import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserFriends } from 'react-icons/fa'
import { MembersListItems } from '..'

function MembersList() {

  return (
    <Dropdown style={{zIndex: '1001'}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic-search">Holiday Members <FaUserFriends/></Dropdown.Toggle>
        <Dropdown.Menu>

          <MembersListItems />
        


      
          </Dropdown.Menu>    
        </Dropdown>
  );
}

export default MembersList