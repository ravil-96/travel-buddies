import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addMarker } from "../../actions"
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MarkerModal({ show, handleClose, location }) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleEntry = (e) => {
    setTitle(e.target.value);
  };
  const handleDescEntry = (e) => {
    setDesc(e.target.value);
  };

  function handleCreate(e){
    e.preventDefault()
    dispatch(addMarker({location, title, desc}))
    handleClose()
  }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Marker</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Create a new marker at [{location[0]}, {location[1]}]

        <Form id="markerForm" onSubmit={(e) => handleCreate(e)}>

        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter title"
            onChange={handleTitleEntry}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDesc">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter desc"
            onChange={handleDescEntry}
          />
        </Form.Group>

      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" form='markerForm'>
          Create
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MarkerModal;
