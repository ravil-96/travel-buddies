import React from 'react'
import { Login } from '../../components'
import { Header } from '../../layout'

import './style.css'

function Home(){
    return ( 
    <div role="article">
        <Header />  
        <div class="row"> 
            <div class="column"><img src="https://i.imgur.com/O3N7N6x.png"/></div>
            <div class="column"><Login /></div>
        </div> 
    </div>
    )
}

export default Home;
