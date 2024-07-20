// src/pages/Awareness/ForeignInfluenceSlider.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ForeignInfluenceSlider.css';

const slides = [
  {
    image: '/images/BelgiumEvil.webp',
    title: 'BELGIUM: THE ROOT OF EVIL',
    subtitle: 'Subtitle for foreign influence image 6',
    description: 'Genuinely cannot believe that Belgium was able to have so much hatred for Congolese people. I really despise the atrocities they have committed against the Congolese. Nasty people.'
  },
  {
    image: '/images/CanadaEh.jpg',
    title: 'CANADA',
    subtitle: 'Although not known to be a major player in the DRC, Canada has a history of mining in the country.',
    description: 'Them folks wanna be seen as nice but whole time they are out there scheming and shit and causing disruption. Evil folks innit.'
  },
  {
    image: '/images/AmericanArmy.jpg',
    title: 'THE UNITED STATES OF AMERICA',
    subtitle: 'The US has a long history of involvement in the DRC.',
    description: "They've been involved in the DRC for a long time, and they've done some pretty bad things. They've supported dictators, and they've supported rebel groups. They've done a lot of bad things, and they need to be held accountable for it." 
    },
  {
    image: '/images/China.jpg',
    title: 'THE REPUBLIC OF CHINA',
    subtitle: 'Known for its aggressive mining practices in the DRC.',
    description: 'China is weird and they be doing weird stuff to the Congolese folks like buying their lands for mining and exploitative reasons and then telling the locals to leave and that is wrong. It is wrong because it is basically neo-colonialism, which we all know is evil and bad.'
  },
  {
    image: '/images/Uganda.jpg',
    title: 'UGANDA',
    subtitle: 'Uganda has been accused of supporting rebel groups in the DRC.',
    description: "Uganda's basically like Rwanda's little brother, so they're mad annoying. I have some facts about them I just have to collect my papers."
  },
  {
    image: '/images/m23Evil.webp',
    title: 'M23 REBELS: BACKED BY RWANDA',
    subtitle: 'Named after the March 23 Movement, the M23 rebel group is a major threat to the DRC.',
    description: "They're genuinely bad people and don't even deserve mercy, just ugly and messy."
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
    <div className="slider-container foreign-influence-background">
      <div className="slide-content-foreign">
        <h2>FOREIGN INFLUENCE</h2>
        <h1>{slides[currentSlide].title}</h1>
        <h3>{slides[currentSlide].subtitle}</h3>
        <p>{slides[currentSlide].description}</p>
      </div>
      <div className="slider-foreign">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.title} className="slide-image-foreign" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ForeignInfluenceSlider;
