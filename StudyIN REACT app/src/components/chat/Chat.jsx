import React from 'react'
import Add from "../../assets/add.png";
import More from "../../assets/more.png";
import Cam from "../../assets/cam.png";
import Messages from "../messages/Messages";
import Input from "../input/Input";

const Chat = () => {
  return (
    <div className="chat2">
      <div className="chatInfo2">
        <span>Wail Bouguerra</span>
        <div className="chatIcons2">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat