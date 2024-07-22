import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../LanguageProvider';
import './Home.css';
import Secondhomepage from '/images/2ndhomepageimage.webp';
import ChatBox from './ChatBox'; // Import the ChatBox component

const Home = () => {
  const { switchLanguage } = useContext(LanguageContext);

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
            “I am still a child. This job doesn't deserve me. 
            I'd like us all to be able to study and put an end 
            to these mining stories,” 
            “I regret the time I spent in the mines. 
            I missed out on a lot of subjects.<br/> Because my 
            friends were going to school, and I was working.
            Those who were at the same level as me when I started mining, 
            completely passed me by.<br/> That's what I regret.”
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
          <button className="donate-button" onClick={handleDonateClick}>DONATE</button>
        </div>
      </div>
      <ChatBox /> {/* Add the ChatBox component here */}
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>Français</button>
    </>
  );
}

export default Home;
