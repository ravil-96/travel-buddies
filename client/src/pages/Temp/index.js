import React, { useState, useEffect } from'react';
import io from 'socket.io-client';

function Temp(){
    const [mySocket, setMySocket] = useState(null)
    useEffect(() => {
        const socket = io("localhost:3000");
        console.log("connected", socket)
        setMySocket(socket)

        socket.on('my response', (data) => {
            console.log(data)
        });
      },[])

      function handleClick(){
        mySocket.emit("my event", {msg: 'hello!'});
      }
    return( <>
            <h1>Temp page</h1>
            <button onClick={handleClick}>click</button>
            </>)
}

export default Temp