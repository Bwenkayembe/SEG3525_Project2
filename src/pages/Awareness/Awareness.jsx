// src/pages/Awareness/Awareness.jsx
import React from 'react';
import './Awareness.css';
import { Link } from 'react-scroll';
import headerImage from '/images/StarLogo.png'; // Adjust the path as needed
import ImageSlider from './ImageSlider';
import CobaltDemandGraph from './CobaltDemandGraph';
import ForeignInfluenceSlider from './ForeignInfluenceSlider';
import LocalsReality from './LocalsReality';
import logo from '/images/Group3.png'; // Adjust the path as needed

const Awareness = () => {
  return (
    <div className="awareness-page">
      <header className="header-body-awareness">
        <div className="header-content">
          <img src={headerImage} alt="Header Image" className="awareness-header-image" />
          <h1>AWARENESS</h1>
        </div>
        <p>Why it's important to understand. Dive in deeper to get a better grasp of things.</p>
        <button className="btnbtn">
          <Link to="content-section" className="explore-more-link" smooth={true} offset={-70} duration={500}>
            Learn More <img src="/images/arrow2use.png" alt="arrow" />
          </Link>
        </button>
      </header>
      <main id="content-section" className="content-section">
        <div className="preface">
            <p>This section highlights the key issues in the Democratic Republic of Congo
             (DRC): resource exploitation, harmful foreign influence, and harsh local 
             conditions.Small-scale mining in the DRC involves people of all ages, 
             including children. Of the 255,000 Congolese mining cobalt, 
             40,000 are children, earning less than $2 per day. Rising global 
             demand for these minerals raises significant human rights concerns. 
             Big-tech companies like Apple, Google, Dell, Microsoft, and Tesla have faced 
             lawsuits over child labor in DRC cobalt mines. Accountability efforts must be 
             supported by public awareness of child exploitation and poor working conditions.
             The DRC holds over 70% of the world's cobalt reserves, essential for rechargeable batteries. 
             Growing demand has led to human rights abuses, including forced evictions from expanding cobalt and copper mines.
             This page will reveal the realities of mining cobalt, copper, and tantalum in the DRC.
            </p>
        </div>
        <ImageSlider />
        <CobaltDemandGraph />
        <ForeignInfluenceSlider />
        <LocalsReality />
      </main>
      <footer className="footer">
      <div className='footer-content'>
        <div className='logo-section'>
          <img src={logo} alt="ABC Logo" className='footer-logo' />
          <p className='tagline'>There's no liberation without community: Stand with the country that powers the world</p>
        </div>
        <div className='stay-informed-section'>
          <h3>STAY INFORMED!</h3>
          <form className='subscribe-form'>
            <input type='email' placeholder='Enter your email'  className='emailInput' required/>
            <button type='submit' className='submit-button'> SUBMIT</button>
          </form>
        </div>
        <div className='social-section'>
          <h3>FOLLOW US</h3>
          <div className='social-icons'>
            <a href="#"><i className="bi bi-tiktok"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-threads"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2024 Awareness and Boycott for Congo. Ontario, Canada. All rights reserved</p>
        <div className='footer-links'>
          <a href="#"><b>PRIVACY POLICY</b></a>
          <a href="#"><b>TERMS AND CONDITIONS</b></a>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Awareness;
