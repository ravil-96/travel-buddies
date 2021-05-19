import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addMarker } from "../../actions"
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { sendMarker } from "../../api"

function MarkerModal({ show, handleClose, location }) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams()

  const handleTitleEntry = (e) => {
    setTitle(e.target.value);
  };
  const handleDescEntry = (e) => {
    setDesc(e.target.value);
  };

  const mySocket = useSelector(state => state.user.socket)
  async function handleCreate(e){
    e.preventDefault()
    const marker = await sendMarker({room: id, position_lat: location[0], position_long: location[1], title: title, desc: desc})
    mySocket.emit("add marker", {room: id, marker: {location, title, desc, id: marker.id}});
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
            placeholder="Enter description"
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
