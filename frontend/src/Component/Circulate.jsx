import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
function Circulate() {
  return (
    <div>
        <Topbar />
        <div className='container min-h-[400px]'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Circulate