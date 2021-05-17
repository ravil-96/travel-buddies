import React, {useState} from "react";
// import openLauncher from "../../../public/images/launcher_button.png";
// import close from '../../../public/images/clear-button.png';
//  import sendButtonIcon from "../../../public/images/send_button.png";
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
    <div>
      <div className="chatApp__room">
        <div className="chatApp_conv">
          <div className="chatApp_convTimeline">
            <div className="chatApp_convMessageItem--left">
              <img
                src="https://i.pravatar.cc/150?img=56"
                alt="Gabe"
                className="chatApp__convMessageAvatar"
              ></img>
              <div className="chatApp__convMessageValue">
                We need to book flights asap, prices are going up
              </div>
            </div>
            <div className="chatApp_convMessageItem--right">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Eden"
                className="chatApp__convMessageAvatar"
              ></img>
              <div className="chatApp__convMessageValue">{message}</div>
            </div>
          </div>

          <div className="chatApp__convSendMessage">
            <div class="chatApp__convTyping"></div>
            <form>
              <input type="hidden" value="person1" />
              <input
                type="text"
                className="chatApp__convInput"
                placeholder="Text message"
                onChange={handleInput}
              />
              <div
                className="chatApp__convButton "
                onClick={handleSend}
              >
                <i className="material-icons">send</i>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default ChatBox;
