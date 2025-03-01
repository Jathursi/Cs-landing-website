
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';
// import Up from './Up';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});
function Events() {
  const navigate = useNavigate();
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'csEvents' })
      .then((response) => {
        const today = new Date();
        const filteredEvents = response.items.filter(event => 
          new Date(event.fields.date) < today
        );
        setPastEvents(filteredEvents);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/circulate/gallery?id=${id}`);
  };

  return (
    <div>
        <section className='mb-5 mx-5 md:mb-0'>
        <div className="container ">
            <h1 className='text-2xl text-center text-b3 font-bold pb-10 uppercase'>
            Previous Events
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {pastEvents.map((event) => (
                <div
                key={event.sys.id}
                className='bg-white w-[250px]  shadow-lg flex flex-col items-center justify-between mb-4 rounded-md'
                onClick={() => handleCardClick(event.sys.id)}
                >
                <img src={event.fields.image?.fields.file.url} alt={event.fields.event} className="w-full rounded scale 125" />
                    <div className='p-4'>
                        <h2 className='text-lg font-bold text-center'>{event.fields.event}</h2>
                        <p className='text-sm text-center text-neutral-500'>{event.fields.date}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}

export default Events;