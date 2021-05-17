import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";

function ChatBox() {
    const [message, setMessage] = useState("")

 function handleSend(e){
    e.preventDefault()
    // console.log(e.target.value)
    handleInput()
 }

function handleInput(e){
    console.log(e.target.value);
    setMessage(e.target.value);
}

  return (
    <div className="chat-box">
      <div className="chatApp_conv">
        <div className="chatApp_convTimeline">
          <div className="chatApp_convMessageItem--left clearfix">
            <div className="chatApp__convMessageValue">hello?</div>
          </div>

          <div className="chatApp_convMessageItem--right clearfix">
            <div className="chatApp__convMessageValue">hello</div>
          </div>
        </div>
        <div className=" row">
          <Form className="col-10">
            <Form.Group>
              <Form.Control type="text" placeholder="Enter message" className="text-input"/>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" className="send-message btn col-2">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ChatBox;
