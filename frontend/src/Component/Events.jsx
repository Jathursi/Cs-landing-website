
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createClient } from 'contentful';
// // import Up from './Up';

// const client = createClient({
//   space: process.env.REACT_APP_CONTENTFUL_SPACE,
//   accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
// });
// function Events() {
//   const navigate = useNavigate();
//   const [pastEvents, setPastEvents] = useState([]);

//   useEffect(() => {
//     client.getEntries({ content_type: 'csEvents' })
//       .then((response) => {
//         const today = new Date();
//         const filteredEvents = response.items.filter(event => 
//           new Date(event.fields.date) < today
//         );
//         setPastEvents(filteredEvents);
//       })
//       .catch(console.error);
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/circulate/upcomming/${id}`);
//   };

//   return (
//     <div>
//         <section className='mb-5 mx-5 md:mb-0'>
//         <div className="container ">
//             <h1 className='text-2xl text-center text-b3 font-bold pb-10 uppercase'>
//             Previous Events
//             </h1>
//             <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8'>
//             {pastEvents.map((event) => (
//                 <div
//                 key={event.sys.id}
//                 className='bg-white w-[250px]  shadow-lg flex flex-col mb-4 rounded-md'
//                 onClick={() => handleCardClick(event.fields.id)}
//                 >
//                     <img src={event.fields.image?.fields.file.url} alt={event.fields.event} className="w-full rounded scale 125" />
//                     <div className='p-4 flex justify-center '>
//                         <h2 className='text-lg text-center font-bold '>{event.fields.event}</h2>
//                         {/* <h2 className='text-lg font-bold text-center'>{event.fields.id}</h2> */}
//                         {/* <p className='text-sm text-center text-neutral-500'>{event.fields.date}</p> */}
//                     </div>
//                 </div>
//             ))}
//             </div>
//         </div>
//         </section>
//     </div>
//   );
// }

// export default Events;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Events() {
  const navigate = useNavigate();
  const [pastEvents, setPastEvents] = useState([]);
  const carouselRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    client.getEntries({ content_type: 'csEvents' })
      .then((response) => {
        const today = new Date();
        const filteredEvents = response.items
          .filter(event => new Date(event.fields.date) < today)
          .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date)); // Sort latest first
        setPastEvents(filteredEvents);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/circulate/upcomming/${id}`);
  };

  // Scroll function for Next & Previous buttons
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust for smooth scrolling
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative mx-5">
      <section className="mb-5">
        <div className="container">
          <h1 className="text-2xl text-center font-bold pb-0 md:pb-5 uppercase">
            Previous Events
          </h1>

          {/* Carousel Container */}
          <div className="relative flex items-center">
            {/* Left Arrow Button */}
            <button 
              className="absolute left-0 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition hidden md:block"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Scrollable Row */}
            <div 
              ref={carouselRef} 
              className="flex w-full p-10 overflow-x-auto space-x-10 scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {pastEvents.map((event) => (
                <div
                  key={event.sys.id}
                  className="bg-white w-full md:w-2/4 lg:w-1/4 shadow-lg shadow-orange-200 flex flex-col rounded-md shrink-0"
                  onClick={() => handleCardClick(event.fields.id)}
                >
                  <img 
                    src={event.fields.image?.fields.file.url} 
                    alt={event.fields.event} 
                    className="w-full h-70 object-cover rounded-t-md"
                  />
                  <div className="p-4 flex justify-center">
                    <h2 className="text-lg text-center font-bold">{event.fields.event}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button 
              className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition hidden md:block"
              onClick={() => scroll("right")}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
