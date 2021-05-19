export const addSocket = (socket) => ({type: 'ADD_SOCKET', payload: socket})  

export const addMember = (member) => ({type: 'ADD_MEMBER', payload: member})  

export const currentMembers = (members) => ({type: 'CURRENT_MEMBERS', payload: members})  

export const addChat = (message) => ({type: 'ADD_CHAT', payload: message})  

export const clearChat = (message) => ({type: 'CLEAR_CHAT', payload: message})  