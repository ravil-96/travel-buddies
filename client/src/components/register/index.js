import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userRegister } from "../../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./style.css";

function Register({ show, handleClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

    const usernameValidationMessage =
      "Your username should contain only letters!";
    const passwordValidationMessage =
      "Please enter password between 6 and 16 characters!";
    const confirmPasswordValidationMessage =
      "Your passwords should match";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(userRegister(username, email, password));
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

  const handleEmailEntry = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordConfirmEntry = (e) => {
    setConfirmPassword(e.target.value);
    // if (password !== confirmPassword) {
    //   alert("passwords don't match");}
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
                pattern={"[A-Za-z]+"}
                minLength={3}
                required={true}
                onChange={handleUsernameEntry}
                value={username}
                validationmessage={usernameValidationMessage}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegisterEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required={true}
                onChange={handleEmailEntry}
                value={email}
                pattern={"/@/"}
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
                required={true}
                minLength={6}
                maxLength={18}
                onChange={handlePasswordEntry}
                value={password}
                validationmessage={passwordValidationMessage}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegisterPasswordConfirm">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required={true}
                onChange={handlePasswordConfirmEntry}
                minLength={6}
                maxLength={18}
                value={confirmPassword}
                validationmessage={confirmPasswordValidationMessage}
              />
            </Form.Group>
            <Button
              required
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
