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
    subtitle: `Belgium's brutal colonial rule in the DRC`,
    description: `Belgium's colonial rule in the DRC under King Leopold II was marked by extreme brutality, resulting in the deaths of millions of Congolese. The colonial administration exploited the country's resources, especially rubber, through forced labor and severe punishments. Although Belgium has expressed regret for its colonial actions and is in the process of returning looted cultural artifacts, the people of the Congo have yet to receive proper compensation and reparations for the atrocities committed against them​`
  },
  {
    image: '/images/CanadaEh.jpg',
    title: 'CANADA',
    subtitle: 'Although not known to be a major player in the DRC, Canada has a history of mining in the country.',
    description: `Canada's involvement in the DRC has primarily been through humanitarian aid and development projects. Additionally, several Canadian mining companies operate in the DRC, extracting valuable minerals. While these companies contribute to the local economy, there have been concerns about their environmental impact and the conditions under which local workers operate`
    },
  {
    image: '/images/AmericanArmy.jpg',
    title: 'THE UNITED STATES OF AMERICA',
    subtitle: 'The US has a long history of involvement in the DRC.',
    description: `The United States has had a profound impact on the Democratic Republic of the Congo (DRC) 
    since the Cold War. The CIA played a crucial role in the assassination of Prime Minister Patrice Lumumba and 
    supported the rise of Mobutu Sese Seko to counter Soviet influence. In recent years, multiple American companies 
    have been criticized for benefiting from the exploitation of the DRC's mineral resources, particularly cobalt and 
    copper, which are essential for advanced technologies like smartphones and electric vehicles. This exploitation has 
    often come at the expense of local communities and has been linked to severe human rights abuses, including child labor​ `
    },
  {
    image: '/images/China.jpg',
    title: 'THE REPUBLIC OF CHINA',
    subtitle: 'Known for its aggressive mining practices in the DRC.',
    description: `China is one of the most significant foreign players in the DRC's mining sector. Through substantial investments and infrastructure projects in exchange for mineral rights, China has secured a dominant position in the extraction of cobalt and copper. This relationship, often referred to as "resources-for-infrastructure" deals, has been beneficial economically but has also drawn criticism for poor labor practices and environmental degradation`
  },
  {
    image: '/images/Uganda.jpg',
    title: 'UGANDA',
    subtitle: 'Uganda has been accused of supporting rebel groups in the DRC.',
    description: `Uganda and Rwanda have both been heavily involved in the DRC's internal conflicts, often accused of supporting rebel groups like the M23 to exploit the DRC's rich mineral resources. Rwanda, in particular, has been implicated in supporting the M23 rebels to secure economic interests in the eastern part of the DRC. This involvement has led to significant regional instability and numerous human rights violations​ `
  },
  {
    image: '/images/m23Evil.webp',
    title: 'M23 REBELS: BACKED BY RWANDA',
    subtitle: 'Named after the March 23 Movement, the M23 rebel group is a major threat to the DRC.',
    description: `The M23 rebel group, primarily supported by Rwanda, has been a major destabilizing force in eastern DRC. The group controls areas rich in minerals and has been involved in serious human rights abuses, including forced displacement and violence against civilians​`
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
