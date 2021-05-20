import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client";
import { socketUrl } from '../../api'
import { addSocket, currentMembers, addMember, addMarker, deleteMarker, addChat } from '../../actions'

function useSocket(id){
  
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io(`${socketUrl}`)
        dispatch(addSocket(socket))
        socket.emit("join", {room: id, username: user});
  
          socket.on("connected sockets", (data) => {
            dispatch(currentMembers(data))
          });

          socket.on("server marker", (data) => {
            dispatch(addMarker(data))
          });

          socket.on("server add member", (data) => {
            dispatch(addMember(data))
          });

          socket.on("server delete marker", (data) => {
            dispatch(deleteMarker(data))
          });

          socket.on("server message", (data) => {
            dispatch(addChat(data))
          });

          return () => { 
            socket.disconnect()
          }
    },[])
}

export default useSocket