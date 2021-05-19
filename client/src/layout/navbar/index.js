import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Header>
         <nav id="nav-links">
        <NavLink to="/profile" activeClassName="current">
          Profile
        </NavLink>
        <NavLink to="/holidays/3" activeClassName="current">
          temp link room3
        </NavLink>
      </nav>
      <Link exact to="/" activeClassName="current">
        <img src="https://i.imgur.com/KvFHW2R.png" />
      </Link>
</Header>
    
  );
}

export default NavBar;
