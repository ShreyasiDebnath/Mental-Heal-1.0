import React, { useContext, useState } from "react";
import attach from '../assets/attach.png';
import img from '../assets/img.png';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { arrayUnion, doc, serverTimestamp, Timestamp, setDoc, getDoc } from "firebase/firestore";
import { db, storage } from "../Firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    const chatId = data.chatId;
    const userId = currentUser.uid;
    const recipientId = data.user.uid;

    // Create or update chat document
    const chatDocRef = doc(db, "chats", chatId);
    const userChatDocRef = doc(db, "userChats", userId);
    const recipientChatDocRef = doc(db, "userChats", recipientId);

    const newMessage = {
      id: uuid(),
      text,
      senderId: userId,
      date: Timestamp.now(),
    };

    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          newMessage.img = downloadURL;

          // Ensure chat document exists before updating
          const chatDocSnapshot = await getDoc(chatDocRef);
          if (!chatDocSnapshot.exists()) {
            await setDoc(chatDocRef, { messages: [newMessage] });
          } else {
            await setDoc(chatDocRef, {
              messages: arrayUnion(newMessage),
            }, { merge: true });
          }
        }
      );
    } else {
      // Ensure chat document exists before updating
      const chatDocSnapshot = await getDoc(chatDocRef);
      if (!chatDocSnapshot.exists()) {
        await setDoc(chatDocRef, { messages: [newMessage] });
      } else {
        await setDoc(chatDocRef, {
          messages: arrayUnion(newMessage),
        }, { merge: true });
      }
    }

    // Update user chats
    const userChatUpdate = {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    };

    await setDoc(userChatDocRef, userChatUpdate, { merge: true });
    await setDoc(recipientChatDocRef, userChatUpdate, { merge: true });

    setText("");
    setImg(null);
  };
  return (
    <div className='chat-input'>
        <input type="text" placeholder='TYPE SOMETHING...'  onChange={(e) => setText(e.target.value)}
        value={text}/>
        <div className='send'>
            <img src={img}alt=''/>
            <input type="file" style={{display:"none"}}  id="file"
          onChange={(e) => setImg(e.target.files[0])}/>
            <label htmlFor='file'>
                <img src={attach}alt=''/>
            </label>
            <button onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default Input