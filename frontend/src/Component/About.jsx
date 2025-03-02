import React from 'react'

function About() {
  return (
    <div className='flex flex-col justify-center items-center mb-10'>
        <div className='mt-10'>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center tracking-wide">
                {/* Institution of Knowledge  */}
                <span className="bg-gradient-to-r from-org to-yel1 bg-clip-text text-transparent">
                {" "}
                IEEE Computer Society
                </span>
            </h1>
            <p className=" flex flex-col mt-10 text-lg text-center text-neutral-500">
                <span className='text-black font-bold text-2xl mb-4'>About us</span>
                <div>
                    <span className='text-secondary'>The IEEE Computer Society </span>
                    engages computer engineers, scientists, academia, and industry professionals from all areas of computing to set the standard for the education and engagement that fuels continued global technological advancement. Through conferences, publications, and programs, and by bringing together computer science and engineering leaders at every phase of their career for dialogue, debate, and collaboration, IEEE CS empowers, shapes, and guides the future of not only its members, but the greater industry, enabling new opportunities to better serve our world.
                </div>
            </p>
        </div>
        <div className=' flex flex-col mt-10 text-lg text-center text-neutral-500'>
            <span className='text-black font-bold text-2xl mb-4'>Mission</span>
            <p>To foster a collaborative and innovative environment for students at the University of Jaffna by providing access to cutting-edge technology, research, and professional development opportunities. Our mission is to empower future computer scientists and engineers with the knowledge, skills, and network to drive technological advancements and make a positive impact on society.</p>
        </div>
        <div className=' flex flex-col mt-10 text-lg text-center text-neutral-500'>
            <span className='text-black font-bold text-2xl mb-4'>Vision</span>
            <p>
                To be a leading student chapter that inspires and cultivates the next generation of computing professionals, innovators, and researchers. We envision a community where students actively engage in learning, collaboration, and leadership, contributing to the growth of the global technology landscape while upholding the values of IEEE.
            </p>
        </div>
    </div>
  )
}

export default About