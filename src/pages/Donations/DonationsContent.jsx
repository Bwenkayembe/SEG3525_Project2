import React from 'react';
import Slider from 'react-slick';
import './DonationsContent.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const organizations = [
  { name: 'Organization 1', description: 'Description 1', image: '/images/organization1.png' },
  { name: 'Organization 2', description: 'Description 2', image: '/images/organization2.png' },
  { name: 'Organization 3', description: 'Description 3', image: '/images/organization3.png' },
  { name: 'Organization 4', description: 'Description 4', image: '/images/organization4.png' },
  { name: 'Organization 5', description: 'Description 5', image: '/images/organization5.png' },
  { name: 'Organization 6', description: 'Description 6', image: '/images/organization6.png' },
  { name: 'Organization 7', description: 'Description 7', image: '/images/organization7.png' }
];

const families = [
  { name: 'Family 1', description: 'Description 1', image: '/images/family1.png' },
  { name: 'Family 2', description: 'Description 2', image: '/images/family2.png' },
  { name: 'Family 3', description: 'Description 3', image: '/images/family3.png' },
  { name: 'Family 4', description: 'Description 4', image: '/images/family4.png' },
  { name: 'Family 5', description: 'Description 5', image: '/images/family5.png' },
  { name: 'Family 6', description: 'Description 6', image: '/images/family6.png' },
  { name: 'Family 7', description: 'Description 7', image: '/images/family7.png' }
];

const DonationsContent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  return (
    <div className="donations-content-container">
      <p className="donations-description">
        CAN'T DIRECTLY DONATE TO THE WEBSITE, BUT ON ABC, WE WILL GLADLY REDIRECT YOU TO
        DIFFERENT ORGANIZATIONS THAT ARE IN NEED OF DONATIONS.
      </p>
      <div className="donations-buttons">
        <div className="donation-option">
          <p className="donation-text"><b>TO ORGANIZATIONS</b></p>
          <button className="donation-button">
            <a href="#organizations-section">GO!</a>
          </button>
        </div>
        <div className="donation-option">
          <p className="donation-text"><b>TO FAMILIES</b></p>
          <button className="donation-button">
            <a href="#families-section">GO!</a>
          </button>
        </div>
      </div>
      <div className="donations-divider">
      <div id="families-section" className="section">
        <h2>GO FUND MEs</h2>
        <Slider {...settings}>
          {families.map((family, index) => (
            <div key={index} className="card">
              <img src={family.image} alt={family.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{family.name}</h3>
                <p className="card-description">{family.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div id="organizations-section" className="section">
        <h2>ORGANIZATIONS</h2>
        <Slider {...settings}>
          {organizations.map((organization, index) => (
            <div key={index} className="card">
              <img src={organization.image} alt={organization.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{organization.name}</h3>
                <p className="card-description">{organization.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

      </div>
  );
}

export default DonationsContent;
