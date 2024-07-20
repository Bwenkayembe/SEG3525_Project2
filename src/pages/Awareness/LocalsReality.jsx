// src/pages/Awareness/LocalRealitySlider.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const slides = [
  {
    image: '/images/LocalRealityImage1.png',
    title: 'Local Reality Title 1',
    description: 'This is the description for local reality image 1.'
  },
  {
    image: '/images/LocalRealityImage2.png',
    title: 'Local Reality Title 2',
    description: 'This is the description for local reality image 2.'
  },
  {
    image: '/images/LocalRealityImage3.png',
    title: 'Local Reality Title 3',
    description: 'This is the description for local reality image 3.'
  }
];

const LocalsReality = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index)
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.title} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slide-content">
        <h2>Reality of Locals</h2>
        <h1>{slides[currentSlide].title}</h1>
        <h3>{slides[currentSlide].title}</h3>
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default LocalsReality;
