import React, { useContext, useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (username.length > 0) {
      const fetchSuggestions = async () => {
        const q = query(
          collection(db, "users"),
          where("displayName", "==", username)
        );
        try {
          const querySnapshot = await getDocs(q);
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          setSuggestions(users);
        } catch (err) {
          setErr(true);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [username]);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async (selectedUser) => {
    const combinedId =
      currentUser.uid > selectedUser.uid
        ? currentUser.uid + selectedUser.uid
        : selectedUser.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
    setSuggestions([]);
  };

  return (
    <div className="search">
      <div className="searchform">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      <div className="suggestions">
        {suggestions.map((suggestedUser) => (
          <div
            key={suggestedUser.uid}
            className="chat-user"
            onClick={() => handleSelect(suggestedUser)}
          >
            <img src={suggestedUser.photoURL} alt="" />
            <div className="user-chat-info">
              <span>{suggestedUser.displayName}</span>
              <button onClick={() => handleSelect(suggestedUser)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
