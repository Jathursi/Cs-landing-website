// import React from 'react';
// import { motion } from 'framer-motion';

// const Speaker = ({ isOpen, onClose, speakers, currentSpeakerIndex, setCurrentSpeakerIndex }) => {
//   if (!isOpen) return null;

//   const prevSpeaker = () => {
//     setCurrentSpeakerIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
//   };

//   const nextSpeaker = () => {
//     setCurrentSpeakerIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
//   };

//   const currentSpeaker = speakers[currentSpeakerIndex];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
//         <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>
//           &times;
//         </button>
//         <div className="flex justify-between items-center mb-4">
//            <button onClick={prevSpeaker}>&lt;</button>
//             <div className='flex w-full gap-5'>
//                 <div className='w-1/2'>
//                 {currentSpeaker.fields.file?.url && (
//                     <img
//                         src={currentSpeaker.fields.file.url}
//                         alt={`Speaker ${currentSpeakerIndex + 1}`}
//                         className=" w-50 h-50 object-cover rounded-full"
//                     />
//                 )}
//                 </div>
//                 <div className='w-1/2'>
//                     <h2 className="text-xl font-bold">{currentSpeaker.fields.title}</h2>
//                     <p>{currentSpeaker.fields.description}</p>
//                 </div>
//             </div>
//            <button onClick={nextSpeaker}>&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Speaker;

import React from 'react';

const Speaker = ({ isOpen, onClose, speakers, currentSpeakerIndex, setCurrentSpeakerIndex }) => {
  if (!isOpen) return null;

  const prevSpeaker = () => {
    setCurrentSpeakerIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  };

  const nextSpeaker = () => {
    setCurrentSpeakerIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
  };

  const currentSpeaker = speakers[currentSpeakerIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 text-2xl" onClick={onClose}>
          &times;
        </button>

        <div className="flex justify-between items-center">
          {/* Previous Button */}
          <button onClick={prevSpeaker} className="text-3xl">&lt;</button>

          {/* Speaker Details */}
          <div className="flex flex-col md:flex-row w-full gap-5 items-center">
            {/* Speaker Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              {currentSpeaker.fields.file?.url && (
                <img
                  src={currentSpeaker.fields.file.url}
                  alt={`Speaker ${currentSpeakerIndex + 1}`}
                  className="w-30 h-30 md:w-60 md:h-60 object-cover rounded-full border-4 border-gray-300"
                />
              )}
            </div>

            {/* Speaker Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl text-center font-bold">{currentSpeaker.fields.title}</h2>
              <p className="text-gray-600 text-center">{currentSpeaker.fields.description}</p>
            </div>
          </div>

          {/* Next Button */}
          <button onClick={nextSpeaker} className="text-3xl">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
