import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGN0VSDeSE7fszmaa83gydcPd591GvsMk",
  authDomain: "chat-90f7d.firebaseapp.com",
  projectId: "chat-90f7d",
  storageBucket: "chat-90f7d.appspot.com",
  messagingSenderId: "187314204287",
  appId: "1:187314204287:web:9d743db32ed657f9de594a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);