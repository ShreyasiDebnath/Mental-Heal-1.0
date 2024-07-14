import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Chatsuser = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const getChats = () => {
      if (!currentUser?.uid) return;

      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {});
      });

      return () => {
        unsub();
      };
    };

    getChats();
  }, [currentUser]);

  const handleSelect = (chatId, user) => {
    if (selectedChat === chatId) return;
    setSelectedChat(chatId);
    dispatch({ type: "CHANGE_USER", payload: user });
    navigate("/chat");
  };

  const renderStatus = (lastMessage) => {
    if (!lastMessage) return null;
    switch (lastMessage.status) {
      case "sent":
        return <span className="status tick sent">✓</span>;
      case "received":
        return <span className="status tick received">✓✓</span>;
      case "seen":
        return <span className="status tick seen">✓✓✓</span>;
      default:
        return null;
    }
  };

  return (
    <div className="all-chat-user">
      {Object.entries(chats)
        .sort((a, b) => (b[1]?.date || 0) - (a[1]?.date || 0)) // Safe date access
        .map(([chatId, chat]) => (
          chat && chat.userInfo ? (
            <div
              className="chat-user"
              key={chatId}
              onClick={() => handleSelect(chatId, chat.userInfo)}
            >
              <img
                src={chat.userInfo.photoURL || 'defaultImagePath'}
                alt="User Avatar"
              />
              <div className="chat-info">
                <span>{chat.userInfo.displayName}</span>
                <p>{chat.lastMessage?.text || ''}</p>
                {renderStatus(chat.lastMessage)} {/* Render the message status */}
              </div>
            </div>
          ) : null
        ))}
    </div>
  );
};

export default Chatsuser;
