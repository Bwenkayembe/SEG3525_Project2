import React, { useEffect, useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../LanguageProvider';
import './Navbar.css';
import logo from '/images/Group3.png';  // Adjust the path to the logo file
import menu_icon from '/images/menuIcon.png';  // Adjust the path to the menu icon file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false); // Add the sticky state
  const { switchLanguage } = useContext(LanguageContext); // Get switchLanguage from context

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false); // Add the mobileMenu state
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <a href="/"><img src={logo} alt="logo with star and name" className='logo' /></a>
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="/awareness"><FormattedMessage id="navbar.awareness" /></Link></li>
        <li><Link to="/boycott"><FormattedMessage id="navbar.boycott" /></Link></li>
        <li><Link to="/donations"><FormattedMessage id="navbar.donations" /></Link></li>
        <li><Link to="/more"><FormattedMessage id="navbar.more" /></Link></li>
        <li><Link to="/action"><button className='btn'><FormattedMessage id="navbar.action" /></button></Link></li>
      </ul>
      <img src={menu_icon} alt='menu icon sandwich' className='menu_icon' onClick={toggleMenu} />
      <div className="language-switcher">
        <button onClick={() => switchLanguage('en')}>English</button>
        <button onClick={() => switchLanguage('fr')}>Français</button>
      </div>
    </nav>
  );
};

export default Navbar;
