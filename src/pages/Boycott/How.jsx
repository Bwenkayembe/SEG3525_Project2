import React from 'react';
import './How.css';
import backgroundImage from '/images/BoycottImage3p.png'; // Adjust the path as needed

const How = () => {
  return (
    <div className="how-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="how-text-container">
        <h1 className="how-title">HOW TO BOYCOTT</h1>
        <p className="how-description">
          Boycotting can be a powerful way to effect change by refusing to support certain products or companies. Here's how you can boycott effectively: identify the companies or products you wish to boycott, spread the word about your boycott and the reasons behind it, find and support alternative products or companies, and stay informed about the issue and adjust your actions as necessary.
        </p>
      </div>
    </div>
  );
};

export default How;
