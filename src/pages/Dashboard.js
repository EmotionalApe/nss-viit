import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Events from '../components/Events'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Navbar/>

        <div className='flex w-5/6 ml-[18%]'>
          <Profile/>
          <Events/>
        </div>
        
    </div>
  )
}

export default Dashboard