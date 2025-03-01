import React from 'react'
import Topbar from './Topbar'
import Main from './Main'
// import Events from './Events'
import Alleve from './Alleve'
// import About from './About'
import Footer from './Footer'
import Contact from './Contact'
function Home() {
  return (
    <div className=' min-h-screen'>
        <Topbar />
        <div className=''> {/* Add padding to avoid overlap */}
            <section id='main'>
                <Main />
            </section>
            <section id='events'>
                {/* <Events /> */}
                <Alleve />
            </section>
            <section id='contact' className=''>
                <Contact />
            </section>
            <section id='about'>
                <Footer />
            </section>
        </div>
    </div>
  )
}

export default Home