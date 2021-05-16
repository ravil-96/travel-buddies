import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userRegister } from "../../actions";
import { Register } from "..";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RegisterModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(userRegister(username, email, password));
    if (res) {
      history.push("/profile");
    }
  };

  const handleUsernameEntry = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailEntry = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordEntry = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmEntry = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register
          handleUsernameEntry={handleUsernameEntry}
          handleEmailEntry={handleEmailEntry}
          handlePasswordEntry={handlePasswordEntry}
          handlePasswordConfirmEntry={handlePasswordConfirmEntry}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" form='registerForm' onClick={e => handleSubmit()}>
          Sign Up
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;
