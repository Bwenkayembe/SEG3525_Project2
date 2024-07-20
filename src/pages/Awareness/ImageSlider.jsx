import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const slides = [
  {
    image: '/images/CobaltMining.jpg',
    title: 'COBALT',
    subtitle: 'Cobalt Mining in the DRC',
    description: 'This is the description for image 1.'
  },
  {
    image: '/images/coppermining.webp',
    title: 'COPPER',
    subtitle: 'Copper Mining in the DRC',
    description: 'This is the description for image 2.'
  },
  {
    image: '/images/diamondMining.jpeg',
    title: 'DIAMOND',
    subtitle: 'Diamond Mining in the DRC',
    description: 'Diamonds are forever, but the lives of the miners are not. Diamonds are extremely controversial due to the human rights abuses that occur in the mining process. Most dimaonds that are cultivated raw, are at the hands of blood. (insert random staitistcs here). With that being said, it is muhc more beneficial t aim to get lab grown diamonds, as they are more ethical and sustainable. (Insert company that grows lab grown dimaonds.'
  }
];

const ImageSlider = () => {
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
        <h2>MINERALS</h2>
        <h1>{slides[currentSlide].title}</h1>
        <h3>{slides[currentSlide].subtitle}</h3>
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
