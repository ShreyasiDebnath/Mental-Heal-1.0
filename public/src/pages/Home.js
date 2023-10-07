import React from 'react'
import Sidebar from '../component/Sidebar'
import Chatdemo from '../component/Chatdemo'

function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
              <Chatdemo/>  
        </div>
    </div>
  )
}

export default Home