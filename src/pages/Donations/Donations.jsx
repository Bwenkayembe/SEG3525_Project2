import React from 'react';
import headerImage from '/images/StarLogo.png'; // Adjust the path as needed
import { Link } from 'react-scroll';
import './Donations.css';
import logo from '/images/Group3.png'; // Adjust the path as needed
import DonationsContent from './DonationsContent';

const Donations = () => {
  return (
    <div className="donations-page">
      <header className="header-body-donations">
        <div className="header-content-donations">
          <img src={headerImage} alt="Star Logo" className="star-logo-donations" />
          <div className="text-content-donations">
            <h1>DONATIONS</h1>
            <p>Why it's important to understand. Dive in deeper to get a better grasp of things.</p>
            <button className="btnbtn">
              <Link to="content-section" className="explore-more-link" smooth={true} offset={-70} duration={500}>
                Learn More <img src="/images/arrow2use.png" alt="arrow" />
              </Link>
            </button>
          </div>
        </div>
      </header>

      <main id="content-section">
        <DonationsContent />
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
  )
}

export default Donations;
