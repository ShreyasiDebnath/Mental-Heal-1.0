import React, { useState } from "react";
import Add from "../assets/add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);
    setErrMsg("");

    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.file.files[0];

    if (!file) {
      setErr(true);
      setErrMsg("Please upload a file.");
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", res.user);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Upload is in progress...");
        },
        (error) => {
          console.error("Upload failed:", error);
          setErr(true);
          setErrMsg("Failed to upload avatar. Please try again.");
          setLoading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at:", downloadURL);

            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log("Profile updated");

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            console.log("User document set in Firestore");

            await setDoc(doc(db, "userChats", res.user.uid), {});
            console.log("User chats document set in Firestore");

            navigate("/");
          } catch (err) {
            console.error("Error updating profile or setting docs:", err);
            setErr(true);
            setErrMsg("Failed to create user. Please try again.");
            setLoading(false);
          }
        }
      );
    } catch (err) {
      console.error("Error creating user:", err);
      setErr(true);
      setErrMsg("Failed to register. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" name="displayName" placeholder="Display name" />
          <input required type="email" name="email" placeholder="Email" />
          <input required type="password" name="password" placeholder="Password" />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <img src={Add} alt="Add avatar" />
            <span>Add an avatar</span>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
          {err && <p className="error">{errMsg}</p>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
