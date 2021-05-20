import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { sendHoliday } from "../../api"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function NewHolidayButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('')
  const handleTitleEntry = (e) => {
    setTitle(e.target.value);
  };

  const history = useHistory()
  const userId = useSelector(state => state.user.id)
  async function handleCreate(e){
      e.preventDefault()
      const res = await sendHoliday({title: title, creator: userId})
      handleClose()
      history.push(`/holidays/${res.id}`)
  }
  
  return (
    <>
      <Button variant="success" onClick={handleShow} id="new-holiday-button">Create new holiday</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" form="markerForm">
            Create
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewHolidayButton;
