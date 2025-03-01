import React from 'react'
import Topbar from './Topbar'
// import { Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Events from './Events'
import Gallery from './Gallery'
import Team from './Team'
function Main() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Topbar />
        <Home />
        <Events />
        <Gallery />
        <Team />
        <Contact />
        <About />
        {/* <div className='container mx-auto'>
            <Outlet />
        </div> */}
    </div>
  )
}

export default Main