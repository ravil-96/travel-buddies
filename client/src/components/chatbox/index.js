import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";

function ChatBox() {
    const [message, setMessage] = useState("")

 function handleSend(e){
    e.preventDefault()
    // console.log(e.target.value)
    // handleInput()
 }

function handleInput(e){
    console.log(e.target.value);
    setMessage(e.target.value);
    handleSend()
}

  return (
    <div className="chat-box">
      <div className="chat-timeline">
        <div className="message-left ">
          hello
        </div>
        <div className="message-right ">
          {message}
        </div>

        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter message"
              className="text-input"
              onChange={handleInput}
            />

            <Button
              variant="primary"
              type="submit"
              className="send-message"
              onSubmit={handleSend}
            >
              Send
            </Button>
          </Form.Group>{" "}
        </Form>
      </div>
    </div>
  );
}
export default ChatBox;
