import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../LanguageProvider';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import './Home.css';
import Secondhomepage from '/images/2ndhomepageimage.webp';
import ChatBox from './ChatBox'; // Import the ChatBox component

const Home = () => {
  const { switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDonateClick = () => {
    navigate('/donations'); // Navigate to donations page
  };

  return (
    <>
      <div className="MainHome">
        <div className="Content">
          <h1 className="font-poppins"><FormattedMessage id="home.whatIs" /></h1>
          <h1 className="font-libre"><b><FormattedMessage id="home.awarenessBoycott" /></b></h1>
          <p className="paragraph">
            <FormattedMessage id="home.paragraph" />
          </p>
        </div>
        <div className="Home">
          <img src={Secondhomepage} alt="Children carrying one another" />
        </div>
      </div>
      <div className="QuoteSection">
        <div className="Quote">
          <p className="testimonial">
            <FormattedMessage id = "home.testimonial"/>
          </p>
          <p className="author">- FAUSTIN, 11</p>
        </div>
        <div className="FunFactContainer">
          <div className="FunFact">
            <h1 className="font-poppins"><FormattedMessage id="home.didYouKnow" /></h1>
            <p className="paragraph">
              <FormattedMessage id="home.funFact" />
            </p>
          </div>
          <button className="donate-button" onClick={handleDonateClick}><FormattedMessage id="home.donate"/></button>
        </div>
      </div>
      <ChatBox /> {/* Add the ChatBox component here */}
    </>
  );
}

export default Home;
