import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from 'react-redux'
import "./index.css";

function Message({ username, content }){
  return (
        <div className={`message ${username === 'bob' ? 'me' : 'other'}`}>
          <small>{username}</small>
          <div>{content}</div>
        </div>
  )
}

function MessageList(){
  const data = [
    {username: 'bob', content: 'hello there!'},
    {username: 'chris', content: 'hi bob!'},
    {username: 'steve', content: 'what\'s up! This is a longer message to test long messages - maybe it\'s too long?'}
  ]
  const message_list = data.map(d => <Message username={d.username} content={d.content}/>)
  return message_list
}



function ChatBox() {
    const [message, setMessage] = useState("")

 function handleSend(e){
    e.preventDefault()
    // console.log(e.target.value)
    // handleInput()
 }

function handleInput(e){
    setMessage(e.target.value);
}

  return (
    <div className="chat-box">
      <div className="message-box">
        <MessageList />
      </div>

        <Form>
          <Form.Group style={{display: 'flex'}}>
            <Form.Control
              type="text"
              placeholder="message"
              onChange={handleInput}
            />

            <Button
              variant="primary"
              type="submit"
              onSubmit={(e) => handleSend(e)}
            >
              Send
            </Button>
          </Form.Group>
        </Form>
      </div>
  );
}
export default ChatBox;
