import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx'
import Circulate from './Component/Circulate.jsx';
import Gallery from './Component/Gallery.jsx';
import Events from './Component/Events.jsx';
import About from './Component/About.jsx';
import EventGal from './Component/EventGal.jsx';
import Upcomming from './Component/Upcomming.jsx';
import Teams from './Component/Teams.jsx';
function App() {
  return (
    <div>
      <BrowserRouter basename='Cs-landing-website'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circulate" element={<Circulate />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="eventsmove" element={<Events />} />
            <Route path="about" element={<About />} />
            <Route path="eventgal" element={<EventGal />} />
            <Route path="upcomming/:id" element={<Upcomming />} />
            <Route path="teams" element={<Teams />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;