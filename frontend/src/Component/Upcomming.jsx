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
    <div className='mb-10'>
      <div className='m-5'>
        {event.map((event) => (
          <div key={event.sys.id} className='w-full h-[1000px] md:h-[500px] lg:min-h-[600px]'>
            <div className="h-[1000px] md:h-[600px] relative w-full flex flex-col md:flex-row">
              <div className="p-4 w-full md:w-6/12">
                {event.fields.image?.fields?.file?.url && (
                  <img
                    src={event.fields.image.fields.file.url}
                    alt={event.fields.event}
                    className="w-full h-[400px] md:h-[600px] object-contain rounded-lg "
                  />
                )}
              </div>
              <div className='p-4 w-full md:w-6/12'>
                <div className=" h-[400px] overflow-y-auto">
                  <p className="text-gray-800" style={{ whiteSpace: 'pre-line' }}>{event.fields.description}</p>
                </div>
                <div className='flex flex-col h-[100px] mt-5'>
  <p className='text-gray-700 flex gap-4'>
    <strong>Speakers:</strong>
    {event.fields.speaker && Array.isArray(event.fields.speaker) && event.fields.speaker.length > 0 && (
      <div className="flex flex-col gap-1">
        {event.fields.speaker.map((speaker, index) => (
          <div key={index} className="flex flex-col">
            {speaker.fields.file?.url && (
              <div>
                <p>{speaker.fields.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </p>

  {/* Hide this if there are no speakers */}
  {event.fields.speaker?.length > 0 && (
    <div className='flex items-center gap-4'>
      <div className='flex text-b2 underline cursor-pointer mt-1' onClick={() => openModal(0)}>
        Click to see more info
      </div>
    </div>
  )}
</div>

              </div>
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