import React from "react";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../../components"
import Button from "react-bootstrap/Button";
import './style.css'

function NavBar() {
  return (
    <nav id="navbar">
    
      <NavLink to="/profile" activeClassName="current">
        <Button>Profile</Button>
      </NavLink>
      <LogoutButton />
    </nav>
  );
}

export default NavBar;
