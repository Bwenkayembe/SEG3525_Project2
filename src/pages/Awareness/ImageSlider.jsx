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
    description: `Cobalt is a hard, lustrous, gray metal used mainly in batteries, alloys, and catalysts.
    Cobalt is essential for the production of lithium-ion batteries, 
    which are used in electric vehicles, smartphones, and laptops. 
    It is also used in superalloys that are resistant to high temperatures and corrosion, 
    making it critical for aerospace and industrial applications. The DRC produces approximately 70% of 
    the world's cobalt, with annual production around 100,000 metric tons.​`
  },
  {
    image: '/images/coppermining.webp',
    title: 'COPPER',
    subtitle: 'Copper Mining in the DRC',
    description: `Copper is a red-brown metal known for its high conductivity, malleability, and resistance to corrosion.
    Copper is crucial for electrical wiring, plumbing, and as a component in various electronic devices. 
    It is also essential in renewable energy technologies, such as wind turbines and solar panels, 
    due to its excellent electrical conductivity.
    Copper is mined through both open-pit and underground mining methods. 
    The mining process involves extracting the ore, crushing it, and then processing 
    it to extract copper. The ethical implications of copper mining vary; while some operations 
    adhere to strict environmental and labor standards, others have been criticized for causing 
    significant environmental damage and poor working conditions​ ​.
    The Democratic Republic of the Congo (DRC) is one of the world's largest producers of copper.
     In 2021, the DRC produced around 1.88 million metric tons of copper​ `
  },
  {
    image: '/images/diamondMining.jpeg',
    title: 'DIAMOND',
    subtitle: 'Diamond Mining in the DRC',
    description: `Diamonds are precious gemstones known for their hardness and brilliance, 
    formed under high-pressure, high-temperature conditions in the Earth's mantle. 
    Diamonds are mined through both alluvial mining, where they are extracted from riverbeds and ocean floors, and through 
    kimberlite pipe mining, which involves deep excavation. The ethical implications of diamond mining are significant; 
    conflict diamonds, also known as blood diamonds, are mined in war zones and sold to finance armed conflict against 
    governments. The DRC is one of the world's largest producers of diamonds, producing around 12 million carats annually​.​ `
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
