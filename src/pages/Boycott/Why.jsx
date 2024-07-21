import React from 'react';
import './Why.css';
import WhyPicture from '/images/BoycottImage2.png';

const Why = () => {
  return (
    <>
      <div className="MainHome-boycott">
        <div className="Content-boycott">
          <h1 className="font-poppins-boycott"><b>WHY BOYCOTT</b></h1>
          <p className="paragraph-boycott">
            In this section we'll discuss the importance of boycotting and how it can be used as a tool to effect change.
            So, why is it important to boycott? Boycotting 
            is a powerful way to effect change by refusing to support 
            certain products or companies. Lorem ipsum dolor sit amet, 
            consectetur adipisicing. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Fuga commodi nulla dolorum deserunt veniam atque 
            soluta assumenda quas nostrum laboriosam?
          </p>
        </div>
        <div className="Home-boycott">
          <img src={WhyPicture} alt="Congolese people standing beside one another" />
        </div>
      </div>
    </>
  );
};

export default Why;
