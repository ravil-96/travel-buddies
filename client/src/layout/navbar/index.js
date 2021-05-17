import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="current">
        Home
      </NavLink>
      <NavLink to="/profile" activeClassName="current">
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
