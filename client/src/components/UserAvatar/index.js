import React from 'react'
import './style.css'
import { useSelector } from "react-redux";

function UserAvatar(){
  const status = useSelector((state) => state.user.logged_in)
    console.log(status)
  return (
    <div>
  {/* {status == true ?   <span
          className="status-badge"
          style={{background-color: 'lightgreen'}}
        >
         
        </span> :  <span
          className="status-badge"
          style={{background-color: "red"}}
        ></span> }
       */}
       {/* if (status == true){<span
          className="status-badge"
          style={{background-color: 'lightgreen'}}
        ></span>} else 
        {<span
          className="status-badge"
          style={{background-color: "red"}}
        ></span> } */}
      <span className="status-badge"
    //  style={status === true ? {background-color: 'lightgreen'} : {background-color: "red"} }
    ></span>
      
      <img
        id="avatar-image"
        src="data:image/jpeg;base64,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"
      />
       
    </div>
    // add user avatar from bootstrap? status == true && style={"background-color"="lightgreen"}
  );
}
export default UserAvatar