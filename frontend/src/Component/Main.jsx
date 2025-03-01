import React from 'react'
import img from '../assets/logo2.png'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div className='container'>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* <img src={img} alt='' className='w-[400px] md:w-[450px] drop-shadow mb-6' /> */}
      <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center tracking-wide">
        {/* Institution of Knowledge  */}
        <span className="bg-gradient-to-r from-org to-yel1 bg-clip-text text-transparent">
         {" "}
         IEEE Computer Society
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        <span className='text-secondary'>The IEEE Computer Society </span>
         engages computer engineers, scientists, academia, and industry professionals from all areas of computing to set the standard for the education and engagement that fuels continued global technological advancement. Through conferences, publications, and programs, and by bringing together computer science and engineering leaders at every phase of their career for dialogue, debate, and collaboration, IEEE CS empowers, shapes, and guides the future of not only its members, but the greater industry, enabling new opportunities to better serve our world.
      </p>
      <p className='text-2xl text-center m-3 tracking-wide'>Success through knowledge</p>
      <p className='text-gray-400 mb-4 md:mb-0'>Join with us through WHATSAPP</p>
    </div>
    </div>
  )
}

export default Main;