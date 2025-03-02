// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createClient } from 'contentful';
// import { motion } from 'framer-motion';

// const client = createClient({
//   space: process.env.REACT_APP_CONTENTFUL_SPACE,
//   accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
// });

// function Up() {
//   const navigate = useNavigate();
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [expanded, setExpanded] = useState(false);
//   const [id, setID] = useState();
//   const LINE_LIMIT = 5; // Limit to 5 lines

//   useEffect(() => {
//     client.getEntries({ content_type: 'csEvents' })
//       .then((response) => {
//         const today = new Date();
//         const filteredEvents = response.items.filter(event => 
//           new Date(event.fields.date) >= today
//         );
//         setUpcomingEvents(filteredEvents);
//         setID(filteredEvents[0].sys.id);
//       })
//       .catch(console.error);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? upcomingEvents.length - 1 : prev - 1));
//     setExpanded(false);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === upcomingEvents.length - 1 ? 0 : prev + 1));
//     setExpanded(false);
//   };

//   // Function to limit description to specified number of lines
//   const getLimitedDescription = (description) => {
//     const lines = description.split("\n");
//     const limitedDescription = lines.slice(0, LINE_LIMIT).join("\n");

//     return limitedDescription;
//   };

//   const handleCardClick = (id) => {
//     navigate(`/circulate/upcomming?id=${id}`);
//   };

//   return (
//     <section className="w-full px-4 md:px-8 lg:px-16 mt-10">
//       <div className=''>
//         <h1 className='text-2xl font-bold text-center text-b3 uppercase mb-5 md:mb-0'>Upcoming Events</h1>
//         {upcomingEvents.length > 0 ? (
//           <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex justify-center items-center">
//             <div className="relative w-full md:w-[90%] lg:w-[80%] flex items-center">
//               <button className="absolute left-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-l-lg" onClick={prevSlide}>
//                 &#60;
//               </button>
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex w-full shadow-lg rounded-lg overflow-hidden flex-col md:flex-row"
//               >
//                 <img
//                   src={upcomingEvents[currentIndex]?.fields.image?.fields.file.url}
//                   alt={upcomingEvents[currentIndex]?.fields.event}
//                   className="w-full md:w-1/3 object-cover"
//                 />
//                 <div className="w-full md:w-2/3 p-4 md:p-6">

//                   <h2 className="text-xl md:text-2xl font-bold mb-2">
//                     {upcomingEvents[currentIndex]?.fields.event}
//                     {upcomingEvents[currentIndex]?.fields.id}
//                   </h2>
//                   <p
//                     className="text-gray-800 text-sm text-justify md:text-base"
//                     style={{ whiteSpace: 'pre-line' }} // This ensures line breaks are respected
//                   >
//                     {upcomingEvents[currentIndex]?.fields.description.split("\n").length > LINE_LIMIT && !expanded
//                       ? getLimitedDescription(upcomingEvents[currentIndex]?.fields.description) + '...'
//                       : upcomingEvents[currentIndex]?.fields.description
//                     }
//                   </p>
//                   <div className='flex justify-center'>
//                     <button className='bg-gradient-to-l from-org to-yel1 text-white font-bold px-4 py-2 rounded-lg mt-3'
//                       onClick={() => handleCardClick(upcomingEvents[currentIndex].fields.id)}
//                     >
//                       Read more
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//               <button className="absolute right-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-r-lg" onClick={nextSlide}>
//                 &#62;
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No upcoming events.</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Up;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Up() {
  const navigate = useNavigate();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const LINE_LIMIT = 5; // Limit to 5 lines

  useEffect(() => {
    client.getEntries({ content_type: 'csEvents' })
      .then((response) => {
        const today = new Date();
        const filteredEvents = response.items.filter(event => 
          new Date(event.fields.date) >= today
        );
        setUpcomingEvents(filteredEvents);
      })
      .catch(console.error);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? upcomingEvents.length - 1 : prev - 1));
    setExpanded(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === upcomingEvents.length - 1 ? 0 : prev + 1));
    setExpanded(false);
  };

  // Function to limit description to specified number of lines
  const getLimitedDescription = (description) => {
    const lines = description.split("\n");
    const limitedDescription = lines.slice(0, LINE_LIMIT).join("\n");

    return limitedDescription;
  };

  const handleCardClick = (id) => {
    navigate(`/circulate/upcomming/${id}`);
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 mt-10 mb-10 md:mb-0">
      <div className=''>
        <h1 className='text-2xl font-bold text-center text-b3 uppercase mb-5 md:mb-0'>Upcoming Events</h1>
        {upcomingEvents.length > 0 ? (
          <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex justify-center items-center">
            <div className="relative w-full md:w-[90%] lg:w-[80%] flex items-center">
              <button className="absolute left-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-l-lg" onClick={prevSlide}>
                &#60;
              </button>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex w-full shadow-lg rounded-lg overflow-hidden flex-col md:flex-row"
              >
                <img
                  src={upcomingEvents[currentIndex]?.fields.image?.fields.file.url}
                  alt={upcomingEvents[currentIndex]?.fields.event}
                  className="w-full md:w-1/3 object-cover"
                />
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {upcomingEvents[currentIndex]?.fields.event}
                  </h2>
                  <p
                    className="text-gray-800 text-sm text-justify md:text-base hidden md:flex"
                    style={{ whiteSpace: 'pre-line' }} // This ensures line breaks are respected
                  >
                    {upcomingEvents[currentIndex]?.fields.description.split("\n").length > LINE_LIMIT && !expanded
                      ? getLimitedDescription(upcomingEvents[currentIndex]?.fields.description) + '...'
                      : upcomingEvents[currentIndex]?.fields.description
                    }
                  </p>
                  <div className='flex justify-center'>
                    <button className='bg-gradient-to-l from-org to-yel1 text-white font-bold px-4 py-2 rounded-lg mt-3'
                      onClick={() => handleCardClick(upcomingEvents[currentIndex].fields.id)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </motion.div>
              <button className="absolute right-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-r-lg" onClick={nextSlide}>
                &#62;
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No upcoming events.</p>
        )}
      </div>
    </section>
  );
}

export default Up;