import React from "react";
function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Register;