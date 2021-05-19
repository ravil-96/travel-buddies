import React from "react";
import Form from "react-bootstrap/Form";

import './style.css'

function Register({ handleUsernameEntry, handleEmailEntry, handlePasswordEntry, handlePasswordConfirmEntry }) {
  return (
    <div>
      <Form id="registerForm">
      <Form.Group controlId="formBasicRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" required onChange={handleUsernameEntry} />
        </Form.Group>

        <Form.Group controlId="formBasicRegisterEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailEntry} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={handlePasswordEntry}/>
        </Form.Group>

        <Form.Group controlId="formBasicRegisterPasswordConfirm">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required onChange={handlePasswordConfirmEntry}/>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Register;
