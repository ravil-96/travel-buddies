import React from "react";

function Login() {
  return (
  <div>
    <h3>Login</h3>
        <form >
            <input type="email" name="email" placeholder="Email" /> 
            
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" />
        </form>
      

  </div>)
}

export default Login;
