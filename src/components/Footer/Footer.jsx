import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.css';
import logo from '/images/Group3.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo-section'>
          <img src={logo} alt="ABC Logo" className='footer-logo' />
          <p className='tagline'><FormattedMessage id="footer.message" /></p>
        </div>
        <div className='stay-informed-section'>
          <h3><FormattedMessage id="footer.stayInformed" /></h3>
          <form className='subscribe-form'>
            <input type='email' placeholder='Enter your email' className='emailInput' required />
            <button type='submit' className='submit-button'> SUBMIT</button>
          </form>
        </div>
        <div className='social-section'>
          <h3><FormattedMessage id="footer.followUs" /></h3>
          <div className='social-icons'>
            <a href="#"><i className="bi bi-tiktok"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-threads"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p><FormattedMessage id="footer.rights" /></p>
        <div className='footer-links'>
          <a href="#"><b><FormattedMessage id="footer.privacy" /></b></a>
          <a href="#"><b><FormattedMessage id="footer.terms" /></b></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
