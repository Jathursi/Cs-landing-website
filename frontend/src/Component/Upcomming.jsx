import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import Speaker from './Speakers';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Upcomming() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      console.error("No event ID provided in the URL.");
      setError("No event ID provided.");
      setLoading(false);
      return;
    }

    console.log("Fetching event with ID:", id);

    client.getEntries({ content_type: 'csEvents', 'fields.id': id })
      .then((response) => {
        setEvent(response.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
        setError("Event not found.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading event details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const openModal = (index) => {
    setCurrentSpeakerIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mb-10 min-h-[400px] lg:min-h-[600px]'>
      <div className='m-5'>
        {event.map((event) => (      
          <div key={event.sys.id} className='w-full lg:min-h-[600px] flex flex-col md:flex-row'>
  <div className="p-4 w-full lg:w-1/2 hidden lg:flex justify-center">
    {event.fields.image?.fields?.file?.url && (
      <img
        src={event.fields.image.fields.file.url}
        alt={event.fields.event}
        className="w-full md:w-[90%] lg:w-full object-contain md:object-cover rounded-lg"
      />
    )}
  </div>
  <div className='p-4 w-full lg:w-1/2 flex flex-col justify-center'>
    <div className="min-h-[300px] lg:h-[400px] overflow-y-auto">
      <p className="text-gray-800 whitespace-pre-line">{event.fields.description}</p>
    </div>
    {event.fields.speaker?.length > 0 && (
      <div className='mt-4'>
        <strong className='text-gray-700'>Speakers:</strong>
        <div className="flex gap-1">
          {event.fields.speaker.map((speaker, index) => (
            <p key={index}>{speaker.fields.title}, </p>
          ))}
        </div>
        <div className='text-b2 underline cursor-pointer mt-2' onClick={() => openModal(0)}>
          Click to see more info
        </div>
      </div>
    )}
  </div>
</div>
  
        ))}
      </div>
      <Speaker
        isOpen={isModalOpen}
        onClose={closeModal}
        speakers={event[0]?.fields.speaker || []}
        currentSpeakerIndex={currentSpeakerIndex}
        setCurrentSpeakerIndex={setCurrentSpeakerIndex}
      />
    </div>
  );
}

export default Upcomming;