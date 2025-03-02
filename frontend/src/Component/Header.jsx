import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Header() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'csEvents' })
      .then((response) => {
        const today = new Date();
        const upcomingEvents = response.items.filter(event => new Date(event.fields.date) >= today);
        const eventImages = upcomingEvents.map(event => event.fields.image?.fields.file.url);
        setImages(eventImages);
      })
      .catch(console.error);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="h-64 md:h-96 overflow-hidden relative mt-5">
      {images.length > 0 && (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="object-contain w-full h-64 md:h-96"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Header;