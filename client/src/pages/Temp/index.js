import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

function Temp() {
  const [mySocket, setMySocket] = useState(null);
  useEffect(() => {
    const socket = io("localhost:3000");
    console.log("connected", socket);
    setMySocket(socket);

    socket.on("my response", (data) => {
      console.log(data);
    });
  }, []);

  function handleClick() {
    mySocket.emit("my event", { msg: "hello!" });
  }

  async function handlePost() {
    let data = await axios.post("http://localhost:5000/test");
    console.log(data);
  }
  return (
    <>
      <h1>Temp page</h1>
      <button onClick={handleClick}>test socket</button>
      <button onClick={handlePost}>test API</button>
    </>
  );
}

export default Temp;
