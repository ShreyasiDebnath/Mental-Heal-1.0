import React from 'react'
import Sidebar from '../component/Sidebar'
import Chatdemo from '../component/Chatdemo'

function Home() {
  return (
    <div className='home-chat'>
        <div className='container-chat'>
            <Sidebar/>
              <Chatdemo/>  
        </div>
    </div>
  )
}

export default Home