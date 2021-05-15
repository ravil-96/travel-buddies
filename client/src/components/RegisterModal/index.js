import React from "react";
import { Register } from "..";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RegisterModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit">
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
