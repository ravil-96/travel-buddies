import React, { useEffect } from "react";
import { MapSearch, Weather } from "../../components";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client";
import { addSocket } from '../../actions'

function Holiday() {
  const { id } = useParams()
  const user = useSelector(state => state.user.user)

  const dispatch = useDispatch()
      useEffect(() => {
      const socket =  io('http://localhost:3000');
      dispatch(addSocket({ socket }))
      socket.emit("join", {room: id, username: user});

      socket.on("join response", (data) => {
          console.log(data)
          console.log(`${data.username} has joined ${data.room}`)
        });

        socket.on("leave response", (data) => {
          console.log(data)
          console.log(`${data.username} has left ${data.room}`)
        });

        socket.on("connected sockets", (data) => {
          console.log(data)
        });
        return () => { 
          socket.disconnect()
          // socket.emit("leave", {room: id, username: user}) 
        }
  },[])

  return (
    <>
      <Weather />
      <h1>Holiday to New York🗽</h1>
      <div>
        <h4>Details</h4>
        <p>Dates: 18 Jul - 24 Jul</p>
        <p>Buddies: Fred, Hugo</p>
        <p>Weather forecast: too early to tell</p>
        <p>Notes: Flights need to be booked</p>
      </div>
      <img
        src="https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg"
        height="200px"
      />
      <MapSearch />
    </>
  );
}

export default Holiday;
