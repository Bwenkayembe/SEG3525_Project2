// src/pages/Awareness/LocalRealitySlider.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const slides = [
  {
    image: '/images/LocalRealityImage2.jpg',
    title: 'Francine, 24 years old',
    subtitle: 'Asks herself the difference between this site and the village she fled',
    description: `Francine, originally from Kiwanja in Rutshuru territory, arrived at Kanyaruchinya in October 2022. "I fled by motorbike with my grandparents to Rugari, but without money for the rest of the journey, we walked for days and nights without eating," she recalls.
                  This is the third time since 2006 that Francine has had to flee due to fighting. "My pregnancy was a time of extreme suffering. Being pregnant and sleeping on leaves under a tarpaulin is impossible. Now, I worry my baby will suffer from malnutrition. It's very hard to find joy here."
                  The armed violence in the camp is another concern. "The crackle of bullets is common, day and night," she explains. "I sometimes wonder what the difference is between here and the village I fled, between the occupied zones and this camp?"`
  },
  {
    image: '/images/LocalRealityImage1.jpg',
    title: 'Alice, 19 years old',
    subtitle: 'A young mother who fled to Buhumba for safety',
    description: `Alice and her younger brothers fled Buhumba due to fighting 
    and ended up in the Bugere camp near Saké. In Bugere, Alice set up a small 
    drinks shop to earn money and met Elie, also from Buhumba. They moved to Kanyaruchinya in 
    February 2023, where their daughter was born ten months later at the MSF clinic. 
    Despite receiving good care during her pregnancy, Alice is worried about her child's 
    future due to the unsafe conditions and armed bandits in the camp. Elie works various 
    jobs, but they struggle to make ends meet. Despite the hardships,
     Alice sees their child's arrival as a blessing and hopes for peace to return so they 
     can go back to their village.`
  },
  {
    image: '/images/LocalRealityImage3.jpg',
    title: 'Gisèle, 18 years old',
    subtitle: 'Gisèle gave birth in a small maternity unit run by MSF',
    description: 'In November 2022, Gisèle and her parents fled Rugari village in Rutshuru territory. After walking for three weeks, they arrived at the Kanyaruchinya camp, where Gisèle gave birth in a small maternity unit run by MSF. Gisèle now lives next to her parents. The father of her child, a government official, is absent. He promised to marry her "when the war is over" and care for the child at six, but for now, he provides nappies and lotions. Despite the daily challenges, Gisèle feels safe because her tent is next to her parents\', although her mother, Espérance, says that "almost every night, there are bullets crackling"'
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
        <h2>REALITY OF LOCALS</h2>
        <h1>{slides[currentSlide].title}</h1>
        <h3>{slides[currentSlide].subtitle}</h3>
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default LocalsReality;
