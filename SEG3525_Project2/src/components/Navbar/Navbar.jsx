import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '/images/Group3.png';  // Adjust the path to the logo file
import menu_icon from '/images/menuIcon.png';  // Adjust the path to the menu icon file
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false); // Add the sticky state

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
                
                <li><Link to="/awareness">AWARENESS</Link></li>
                <li><Link to="/boycott">BOYCOTT</Link></li>
                <li><Link to="/donations">DONATIONS</Link></li>
                <li><Link to="/more">MORE</Link></li>
                <li><Link to="/action"><button className='btn'>ACTION</button></Link></li>
            </ul>
            <img src={menu_icon} alt='menu icon sandwich' className='menu_icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
