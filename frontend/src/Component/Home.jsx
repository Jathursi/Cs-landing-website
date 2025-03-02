// import React from 'react'
// import Topbar from './Topbar'
// import Main from './Main'
// // import Events from './Events'
// import Alleve from './Alleve'
// // import About from './About'
// import Footer from './Footer'
// import Contact from './Contact'
// import Header from './Header'
// function Home() {
//   return (
//     <div className=' min-h-screen'>
//         <Topbar />
//         <div className=''> {/* Add padding to avoid overlap */}
//             <section>
//                 <Header />
//             </section>
//             <section id='main'>
//                 <Main />
//             </section>
//             <section id='/events'>
//                 {/* <Events /> */}
//                 <Alleve />
//             </section>
//             <section id='/contact' className=''>
//                 <Contact />
//             </section>
//             <section>
//                 <Footer />
//             </section>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Topbar from './Topbar'
import Main from './Main'
// import Events from './Events'
import Alleve from './Alleve'
// import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import Header from './Header'

function Home() {
  return (
    <div className='min-h-screen'>
      <Topbar />
      <div className=''> {/* Add padding to avoid overlap */}
        <section id='home'>
          <Header />
        </section>
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
        <section>
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default Home