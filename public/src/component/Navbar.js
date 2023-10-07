
import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../Firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar-chat'>
        <span className='logo'>chat</span>
        <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar