import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.css';
import arrow from '/images/arrow2use.png'; // Adjust the path to the arrow file
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  return (
    <div className="header container">
      <div className="header-text">
        <h1><FormattedMessage id="header.title" /></h1>
        <p><FormattedMessage id="header.subtitle" /></p>
        <button className='btnbtn'>
          <Link to='MainHome' className='explore-more-link' smooth={true} offset={-70} duration={500}>
            Explore More <img src={arrow} alt="arrow" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
