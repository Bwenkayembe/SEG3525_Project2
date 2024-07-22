import React from 'react';
import './Action.css';
import ActionContent from './ActionContent';
import logo from '/images/Group3.png'; // Adjust the path as needed

const Action = () => {
  return (
    <div className="action-container">
      <header className="action-header">
        BRING IN THE ACTION, AND ACT NOW
      </header>
      <div className="action-buttons">
        <div className="action-button-container">
          <h2 className="action-title">Write a Blog</h2>
          <ActionContent type="blog" />
        </div>
        <div className="action-button-container">
          <h2 className="action-title">Plan a Protest</h2>
          <a href="https://ccla.org/wp-content/uploads/2021/12/Know-Your-Rights-Protesters.pdf" target="_blank" rel="noopener noreferrer">
            <button className="action-button">Go</button>
          </a>
        </div>
      </div>
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

export default Action;
