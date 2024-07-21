// src/pages/Boycott/Boycott.jsx
import React from 'react';
import './Boycott.css';
import { Link } from 'react-scroll';
import headerImage from '/images/StarLogo.png'; // Adjust the path as needed
import xsymbol from '/images/xsymbol.png'; // Adjust the path as needed
import logo from '/images/Group3.png'; // Adjust the path as needed
import Why from './Why';
import How from './How';
import What from './What';

const Boycott = () => {
  return (
    <div className="boycott-page">
      <header className="header-body-boycott">
        <div className="header-left">
          <div className="header-content-left">
            <img src={headerImage} alt="Star Logo" className="star-logo" />
            <h1>BOYCOTT</h1>
          </div>
          <p className="description">
            Boycotting is a powerful way to effect change by refusing to support certain products or companies.
            Learn why it's important and how you can make a difference by making informed choices and supporting ethical practices.
          </p>
          <button className="btnbtn">
          <Link to="content-section" className="explore-more-link-boycott" smooth={true} offset={-70} duration={500}>
            Learn More <img src="/images/arrow2use.png" alt="arrow" />
          </Link>
        </button>
        </div>
        <div className="header-content-right">
          <img src={xsymbol} alt="X Symbol" className="x-symbol" />
        </div>
      </header>

      <main id="content-section">
        <Why />
        <How />
        <What />
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
              <input type='email' placeholder='Enter your email' className='emailInput' required />
              <button type='submit' className='submit-button'>SUBMIT</button>
            </form>
          </div>
          <div className='social-section'>
            <h3>FOLLOW US</h3>
            <div className='social-icons'>
              <a href="#"><i className="bi bi-tiktok"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-threads"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
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

export default Boycott;
