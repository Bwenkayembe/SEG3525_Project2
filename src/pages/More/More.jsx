import React from 'react';
import './More.css';
import headerImage from '/images/StarLogo.png';
import logo from '/images/Group3.png';
import Know from './Know';
import No from './No';

const More = () => {
  return (
    <div className="more-page">
      <header className="header-body-more">
        <div className="header-content-more">
          <div className="header-text-more">
            <h1>STAY INFORMED</h1>
            <p>In today's interconnected world, staying informed is not just an option but a necessity. Being aware of global events, societal issues, and local news empowers individuals to make informed decisions, engage in meaningful conversations, and contribute positively to their communities. It fosters a sense of responsibility and accountability, as we understand the impact of our actions on a broader scale. Moreover, staying informed helps to combat misinformation, promoting a more educated and aware society. It encourages critical thinking and a better understanding of diverse perspectives, which is essential for personal growth and societal harmony. By staying informed, we can identify and support important causes, advocate for justice, and drive change in areas that matter most. In essence, staying informed is the cornerstone of a healthy, functioning democracy and a just society, enabling us to be proactive rather than reactive in the face of challenges and opportunities alike.</p>
          </div>
          <img src={headerImage} alt="Star Logo" className="star-logo-donations" />
        </div>
      </header>

      <main id="content-section-more">
        <Know />
        <No />
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
}

export default More;
