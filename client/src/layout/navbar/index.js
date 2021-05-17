import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="current">
        Home
      </NavLink>
      <NavLink exact to="/holidays/123" activeClassName="current">
        Holidays1
      </NavLink>
      <NavLink exact to="/holidays/456" activeClassName="current">
        Holidays2
      </NavLink>
      <NavLink to="/profile" activeClassName="current">
        Profile
      </NavLink>
    </nav>
  );
}

export default Navbar;
