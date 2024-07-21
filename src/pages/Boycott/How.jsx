import React from 'react';
import './How.css';
import backgroundImage from '/images/BoycottImage3p.png'; // Adjust the path as needed

const How = () => {
  return (
    <div className="how-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="how-text-container">
        <h1 className="how-title">HOW TO BOYCOTT</h1>
        <p className="how-description">
        To effectively boycott and make a meaningful impact,
         individuals should educate themselves about the DRC's issues, 
         including human rights abuses and environmental impacts of mineral mining. 
         Avoid products from companies sourcing minerals unethically, and opt for alternatives 
         like refurbished or second-hand electronics. Support companies committed to ethical 
         sourcing and join advocacy campaigns for corporate accountability and better regulations.
          Reducing consumer demand for products linked to unethical mining practices can pressure 
          companies to improve working conditions, protect the environment, and reduce conflict-driven 
          violence in eastern Congo where most mines are located.
        </p>
      </div>
    </div>
  );
};

export default How;
