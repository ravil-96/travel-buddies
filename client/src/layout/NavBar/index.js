import React from "react";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../../components"
import './style.css'

function NavBar() {
  return (
    <nav id="navbar">
    
      <NavLink to="/profile" activeClassName="current">
        Profile
      </NavLink>
      <LogoutButton />
    </nav>
  );
}

export default NavBar;
