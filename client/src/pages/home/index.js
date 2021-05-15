import React from 'react'
import { Login } from '../../components'

import './style.css'

function Home(){
    return ( 
    <div id="home-page-body">   
    {/* <h1>Travel Buddies 🌎 </h1> */}
    <h1><img src="https://i.imgur.com/GwS3IQc.png"/></h1>
    <Login />
    <p>or register</p>
    </div> 
    )
}

export default Home;
