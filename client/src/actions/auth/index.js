import axios from 'axios'

export const userLogin = (username, password) => {
   return async (dispatch) => {
       try {
         let { data } = await axios.post('http://localhost:5000/login', {
            username: username,
            password: password
          })
          if (data.msg === 'False') {throw Error('incorrect login details')}
          
            dispatch({
               type: 'USER_LOGIN',
               payload: data
           })
           return true
       } catch (err) {
          console.warn(err)
           dispatch({
               type: 'SET_ERROR',
               payload: err.message
           })
           return false
       }
   }
}

export const userRegister = (username, email, password) => {
   return async (dispatch) => {
       try {
         let { data } = await axios.post('http://localhost:5000/register', {
            username: username,
            email: email,
            password: password
          })
          dispatch({
            type: 'USER_LOGIN',
            payload: data
        })
           return true          
       } catch (err) {
          console.warn(err)
           dispatch({
               type: 'SET_ERROR',
               payload: err.message
           })
           return false
       }
   }
}

export const addSocket = (socket)=> ({type: 'ADD_SOCKET', payload: socket})  