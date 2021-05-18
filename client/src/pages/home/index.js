import React from 'react'
import { Login } from '../../components'
import { Header } from '../../layout'

import './style.css'

function Home(){
    return ( 
    <>
        <Header />  
        <div className="row"> 
            <div className="column"><img src="https://i.imgur.com/O3N7N6x.png"/></div>
            <div className="column"><Login /></div>
        </div> 
    </>
    )
}

export default Home;
