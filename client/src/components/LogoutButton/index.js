import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './style.css'

function LogoutButton() {
    let history = useHistory();

    function handleLogOut() {
        // sessionStorage.setItem("userToken", '');
        sessionStorage.clear();
        history.push("/"); 
    }
  return (
    <Button id="logout-button" variant="dark" onClick={handleLogOut}>
      Logout
    </Button>
  );
}
export default LogoutButton;
