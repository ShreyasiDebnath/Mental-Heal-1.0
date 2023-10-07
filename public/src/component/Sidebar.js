import React from 'react'
import Navbar from './Navbar'
import  Search  from './Search'
import Chatsuser from './Chatsuser'
function Sidebar() {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>
        <Chatsuser/>
        </div>
  )
}

export default Sidebar