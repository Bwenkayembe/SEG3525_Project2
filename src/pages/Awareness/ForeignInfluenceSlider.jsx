// src/pages/Awareness/ForeignInfluenceSlider.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const slides = [
  {
    image: '/images/AmericanArmy.png',
    title: 'THE UNITED STATES OF AMERICA',
    description: 'Description for foreign influence image 1.'
  },
  {
    image: '/images/China.jpg',
    title: 'THE REPUBLIC OF CHINA',
    description: 'Description for foreign influence image 2.'
  },
  {
    image: '/images/BelgiumEvil.webp',
    title: 'BELGIUM: THE COLONIAL POWER',
    description: 'Description for foreign influence image 3.'
  },
  {
    image: '/images/m23Evil.webp',
    title: 'RWANDA: The M23 Rebels',
    description: 'Description for foreign influence image 4.'
  },
  {
    image: '/images/Uganda.jpg',
    title: 'UGANDA',
    description: 'Description for foreign influence image 5.'
  },
  {
    image: '/images/CanadaEh.jpg',
    title: 'CANADA',
    description: 'Description for foreign influence image 6.'
  }
];

const ForeignInfluenceSlider = () => {
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
      <div className="slide-content">
        <h2>Foreign Influence</h2>
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.title} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ForeignInfluenceSlider;
