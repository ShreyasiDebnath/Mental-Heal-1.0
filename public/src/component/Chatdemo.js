import React, { useContext } from "react";
import add from "../assets/add.png";
import cam from "../assets/cam.png";
import more from "../assets/more.png";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";
function Chatdemo() {
  const { data } = useContext(ChatContext);
  return (
    // <div className='home'>
    //     <div className='container'>
    <div className='chat'>
        <div className='chat-info '>
            <span>{data.user?.displayName}</span>
            <div className='chat-icon'>
                <img src={add} alt='cam'/>
                <img src={cam} alt='cam'/>
                <img src={more} alt='cam'/>
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
    // </div>
    // </div>
  )
}

export default Chatdemo