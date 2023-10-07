import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGN0VSDeSE7fszmaa83gydcPd591GvsMk",
  authDomain: "chat-90f7d.firebaseapp.com",
  projectId: "chat-90f7d",
  storageBucket: "chat-90f7d.appspot.com",
  messagingSenderId: "187314204287",
  appId: "1:187314204287:web:9d743db32ed657f9de594a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()