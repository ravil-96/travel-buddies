import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.css";
import { MdChat, MdClose } from "react-icons/md";

function Message({ user, content }) {
  const me = useSelector((state) => state.user.user);
  return (
    <div className={`message ${user === me ? "me" : "other"}`}>
      <small>{user}</small>
      <div>{content}</div>
    </div>
  );
}

function MessageList() {
  const data = useSelector((state) => state.chat);
  const message_list = data.map((d) => (
    <Message user={d.user} content={d.content} />
  ));
  return message_list;
}

function ChatBox() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const mySocket = useSelector((state) => state.user.socket);
  function handleSend(e) {
    e.preventDefault();
    mySocket.emit("client message", {
      room: id,
      message: { user: user, content: message },
    });
    // dispatch(addChat({user: user, content: message }))
    setMessage("");
  }

  function handleInput(e) {
    setMessage(e.target.value);
  }

  if (!show) {
    return (
      <Button onClick={handleShow} className="chat-button" variant="secondary" title="show messages">
        <MdChat />
      </Button>
    );
  } else {
    return (
      <>
        <div className="chat-box">
          <div className="message-box">
            <MessageList title="message list"/>
          </div>

          <Form onSubmit={(e) => handleSend(e)}>
            <Form.Group style={{ display: "flex" }}>
              <Form.Control
                type="text"
                placeholder="message"
                value={message}
                onChange={handleInput}
              />

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form.Group>
          </Form>
        </div>
        <Button
          onClick={handleClose}
          className="chat-button"
          variant="secondary"
        >
          <MdClose />
        </Button>
      </>
    );
  }
}
export default ChatBox;
