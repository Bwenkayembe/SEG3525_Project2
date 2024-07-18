import React from 'react';
import './Header.css';
import arrow from '/images/arrow2use.png'; // Adjust the path to the arrow file
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  return (
    <div className="header container">
      <div className="header-text">
        <h1>Stand With Congo: Alert, Boycott, Change</h1>
        <p>Join the movement to end the exploitation of the Congolese people and their resources.</p>
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
