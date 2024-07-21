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
          A boycott is a protest where individuals or groups refuse to buy, use, or participate in something to 
          pressure for change. This action highlights issues and forces organizations or governments to address grievances 
          by impacting their finances. The eastern Democratic Republic of the Congo (DRC) is rich in minerals like cobalt, 
          copper, and diamonds, vital for electronics. Mining these resources often involves severe human rights abuses, 
          including child labor and environmental degradation. Reports indicate that major tech companies like <b>Apple</b> and 
          <b> Google</b> are implicated in lawsuits over child miner deaths in Congo. Boycotting products from such companies 
          can reduce demand for conflict minerals, pressuring them to adopt ethical sourcing practices and improve conditions for DRC miners.
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
