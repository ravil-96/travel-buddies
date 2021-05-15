import axios from 'axios'

export const Login = (username, password) => {
   return async (dispatch) => {
       try {
         let { data } = await axios.post('http://localhost:5000/login', {
            username: username,
            password: password
          })
            dispatch({
               type: 'USER_LOGIN',
               payload: data
           })
       } catch (err) {
         //   dispatch({
         //       type: 'SET_ERROR',
         //       payload: err
         //   })
       }
   }
}