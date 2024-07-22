import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Secondhomepage from '/images/2ndhomepageimage.webp';
import ChatBox from './ChatBox'; // Import the ChatBox component

const Home = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donations');
  };

  return (
    <>
      <div className="MainHome">
        <div className="Content">
          <h1 className="font-poppins">WHAT IS</h1>
          <h1 className="font-libre"><b>AWARENESS & BOYCOTT FOR CONGO?</b></h1>
          <p className="paragraph">
            Awareness & Boycott for Congo is an Ottawa-based website dedicated to educating, 
            mobilizing, and promoting action against the ongoing genocide in the eastern 
            region of the Democratic Republic of Congo. Our goal is to inform and engage individuals 
            about the exploitation occurring in North Kivu, South Kivu, Ituri, and Katanga.
            Join us in discovering why these provinces are being attacked and learn how your 
            consumer choices contribute to the root cause.
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
            <h1 className="font-poppins">DID YOU KNOW?</h1>
            <p className="paragraph">
              The Democratic Republic of Congo is home to the world's largest cobalt reserves. 
              Cobalt is a key component in the production of lithium-ion batteries, which power 
              electric vehicles, smartphones, and laptops. The demand for cobalt has skyrocketed 
              in recent years, leading to an increase in child labor and unsafe working conditions 
              in Congolese mines. By boycotting products made with Congolese cobalt, you can help 
              reduce the demand for child labor and promote ethical mining practices.
            </p>
          </div>
          <button className="donate-button" onClick={handleDonateClick}>DONATE</button>
        </div>
      </div>
      <ChatBox /> {/* Add the ChatBox component here */}
    </>
  );
}

export default Home;
