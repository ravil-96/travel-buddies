import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userRegister } from "../../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./style.css";

function Register( {show, handleClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(userRegister(username, password));
    // if (res) {
    //   history.push("/profile");
    // }
    // if (password !== confirmPassword) {
    //   alert("passwords should match");
    // } else if 
    //   (password.length < 5) {
    //   alert("password must be atleast 5 characters");
    // } else if (res){
    //   history.push("/profile");
    // }
     {
       (() => {
         switch (status) {
          case password.length < 5:
             return alert("password must be atleast 5 characters");
          case password !== confirmPassword:
             return alert("passwords should match");
          case res:
             return history.push("/profile");
           default:
             return null;
         }
       })();
     }
  };

  const handleUsernameEntry = (e) => {
    setUsername(e.target.value);
  };
  // const handleEmailEntry = (e) => {
  //   setEmail(e.target.value)
  // }
 
  const handleEmailEntry = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordConfirmEntry = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== confirmPassword) {
      alert("passwords don't match");}
    //  else {
    //   handleSubmit()
    // }
  };

  const handlePasswordEntry = (e) => {
      setPassword(e.target.value);
    
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="registerForm" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRegisterUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                required
                minLength="3"
                maxLength="20"
                onChange={handleUsernameEntry}
                value={username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegisterEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={handleEmailEntry}
                value={email}
                pattern="/@/"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicRegisterPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                minLength="5"
                maxLength="20"
                onChange={handlePasswordEntry}
                value={password}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegisterPasswordConfirm">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={handlePasswordConfirmEntry}
                minLength="5"
                maxLength="20"
                value={confirmPassword}
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              form="registerForm"
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Register;
