import React from 'react';
import Slider from 'react-slick';
import './DonationsContent.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const organizations = [
  { name: 'Focus Congo', description: 'Empowers Congolese communities with education, healthcare, and economic opportunities.', image: '/images/FocusCongo.jpg', link: 'https://www.focuscongo.com/en/' },
  { name: 'Friends Of The Congo', description: 'Advocates for peace and justice in the Congo through global awareness and local empowerment.', image: '/images/FriendsOfTheCongo.jpg', link: 'https://friendsofthecongo.org/' },
  { name: 'Congolicious Foundation', description: 'Supports Congolese women and children with education and vocational training.', image: '/images/CongoliciousFoundation.png', link: 'https://www.congoliciousfoundation.org/' },
];

const families = [
  { name: 'Congo Bleeding for cobalt: A silent Genocide', description: `The Democratic Republic of Congo is experiencing 
    severe violence and displacement, with millions affected.`, image: '/images/GFMImage1.png', link: 'https://www.gofundme.com/f/Congo-needs-your-support' },
  { name: 'Voices for Congo • 30 Days • 30 Hopes', description: `This campaign aims to raise funds to provide clean water, food, and shelter for 
    displaced Congolese families in East Congo's camps.`, image: '/images/GFMImage2.png', link: 'https://www.gofundme.com/f/voices-for-congo-30-days-30-hopes' },
  { name: `Dons pour les femmes déplacées à l'est de la RDC`, description: `The Congolicious Foundation is launching the Bibititude program to 
    empower women displaced by conflict. `, image: '/images/GFMImage3.png', link: 'https://www.gofundme.com/f/dons-pour-les-femmes-deplacees-a-lest-de-la-rdc' },
  { name: `Help Women and children's in Congo`, description: `Valerie Maganya, a survivor of the Rwandan and Congo
     genocides, seeks support to provide basic necessities for people in Congo.`, image: '/images/GFMImage5.jpg', link: 'https://www.gofundme.com/f/help-women-and-childrens-of-congo' },
  { name: `Help My Congolese Family Flee Genocide`, description: `Congolese refugee seeks to raise funds to safely relocate her aunts 
    and cousins from the violence in Goma, Congo.
     `, image: '/images/GFMImage4.webp', link: 'https://www.gofundme.com/f/help-my-congolese-family-flee-genocide' },
];

const DonationsContent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true, // Ensure arrows are displayed
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
                  <a href={family.link} target="_blank" rel="noopener noreferrer">
                    <button className="donationscontent-donate-button">Donate</button>
                  </a>
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
                  <a href={organization.link} target="_blank" rel="noopener noreferrer">
                    <button className="donationscontent-donate-button">Donate</button>
                  </a>
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
