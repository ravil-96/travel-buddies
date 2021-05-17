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
      <div className="chatApp__room">
        <div className="chatApp_conv">
          <div className="chatApp_convTimeline">

            <div className="chatApp_convMessageItem--left">
              <div className="chatApp__convMessageValue">hello?</div>
            </div>

            <div className="chatApp_convMessageItem--right">
              <div className="chatApp__convMessageValue">hello</div>
            </div>

          </div>
        </div>
      </div>
  );
}
export default ChatBox;
