import React from 'react'
import { Login } from '../../components'
import { Header } from '../../layout'

import './style.css'

function Home(){
    return ( 
    <div>
        <Header />  
        <div class="row"> 
            <div class="column"><img id="city" src="https://i.imgur.com/O3N7N6x.png" width='600px'/></div>
            <div class="column"><Login /></div>
        </div> 
            <div class="row"><img id="steps" src="https://i.imgur.com/J2EkOBx.gif" width='150px'/></div>
    </div>
    )
}

export default Home;
