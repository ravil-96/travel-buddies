import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
    return (
      <>
        <Link exact to="/" activeClassName="current">        
        <div id="header">
          <img src="https://i.imgur.com/KvFHW2R.png" />
        </div>
        </Link>
      </>
    );
}

export default Header