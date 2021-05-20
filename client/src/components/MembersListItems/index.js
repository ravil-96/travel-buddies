import { useSelector } from 'react-redux'
import React from 'react'
import ListGroup from  "react-bootstrap/ListGroup";
import { FaUser } from 'react-icons/fa'

function MembersListItems() {
    const {creator, members, currentMembers}  = useSelector(state => state.members)
  
    const memlist = [creator].concat(members).map(m => m.username)
    const flatcm = currentMembers.map(m => m.username)
    const cmemlist = memlist.map(m => ({username: m, online: flatcm.indexOf(m) !== -1}))
    const list = cmemlist.map((d, i) => {
      return (
        <ListGroup.Item role="listitem" style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}} key={i}>
          {d.username}<FaUser role="img" color={d.online ? "green" : "red"}/>
        </ListGroup.Item>
      );
    });
    return (
      <ListGroup variant="flush">
         {list}
      </ListGroup>
  
    );
    
  }
export default MembersListItems