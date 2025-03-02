import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Teams() {
  const [profiles, setProfiles] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2024/25'); // Default year

  useEffect(() => {
    client.getEntries({ content_type: 'profile' })
      .then((response) => {
        const allProfiles = response.items;

        // Extract unique years
        const extractedYears = [...new Set(allProfiles.map(item => item.fields.year))];
        setYears(extractedYears.sort().reverse()); // Sort years in descending order

        setProfiles(allProfiles);
      })
      .catch(console.error);
  }, []);

  // Filter profiles based on selected year
  const filteredProfiles = profiles
    .filter(profile => profile.fields.year === selectedYear)
    .sort((a, b) => a.fields.id - b.fields.id); // Sort by ID in ascending order

  return (
    <div className='mt-10'>
      <section className='mb-5 mx-5 md:mb-0'>
        <div className="container">
          <div className='flex flex-col md:flex-row justify-between items-center m-5'>
          <h1 className='text-2xl text-center text-b3 font-bold pb-5 uppercase'>
            Team Members
          </h1>

          {/* Dropdown for Year Selection */}
          <div className="flex justify-center mb-5">
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border rounded-md text-lg"
            >
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
          </div>
          {/* Team Members Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <div key={profile.sys.id} className='bg-white shadow-lg shadow-orange-200 flex flex-col items-center justify-between mb-4 rounded-md'>
                  <img 
                    src={profile.fields.photo?.fields.file.url} 
                    alt={profile.fields.name} 
                    className="w-full h-60 object-cover rounded-t-md"
                  />
                  <div className='p-4'>
                    <h2 className='text-lg font-bold text-center'>{profile.fields.name}</h2>
                    <h3 className='text-sm text-center text-gray-600'>{profile.fields.position}</h3>
                    {/* <p className='text-xs text-center text-neutral-500'>ID: {profile.fields.id}</p> */}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-4">No profiles found for {selectedYear}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;
