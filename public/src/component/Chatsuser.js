import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../Firebase";
import { useNavigate, Link } from "react-router-dom";
function Chatsuser() {
    let navigate = useNavigate();
  const pagechange=()=>{
     let path = `/chat`; 
    navigate(path);

  }
  const [chats,setchats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() =>{
    const getChats = () =>{
    const  unsub = onSnapshot (doc (db,"userChats",currentUser.uid),(doc)=>{
      setchats(doc.data());
    })
    return()=>{
      unsub();
    };
  };
  currentUser.uid && getChats();
  },[currentUser.uid]);
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="all-chat-user">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="chat-user"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="chat-info">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chatsuser