import React from "react";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../../components"
import Button from "react-bootstrap/Button";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <nav id="navbar">
      <NavLink to="/profile" activeClassName="current">
      <FontAwesomeIcon icon={faUser} /> Profile
      </NavLink>
      <LogoutButton />
    </nav>
  );
}

export default NavBar;
