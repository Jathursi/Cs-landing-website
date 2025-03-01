import React from 'react'
import img from '../assets/img.jpg'
function Home() {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            {/* image */}
            <div className='flex flex-col items-center justify-center py-14 md:py-0 relative z-10'>
                {/* <img src='/images/home.jpg' alt='home' className='w-full h-full object-cover' /> */}
                <div className='text-center md:text-left space-y-5 lg:max-w-[400px]'>
                    <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>
                        Comp Soc
                    </h1>
                    <br/>
                    <h1>
                        Fresh and innovative ideas for the future
                        <span className='text-secondary'>Comp Soc</span>
                    </h1>
                    <p className='text-2xl tracking-wide'>rgfdf</p>
                    <p className='text-gray-400'>rgfdf</p>
                    <div>
                        <button className='primary-btn'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
             {/*  */}
            <div className='flex justify-center items-center'>
                <img src={img} alt='' className='w-[300px] md:w-[550px] drop-shadow' />
            </div>
        </div>
    </section>
  )
}

export default Home