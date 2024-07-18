import React from 'react';
import './Awareness.css';

const Awareness = () => {
  return (
    <div className="awareness-page">

      <section className="awareness-section">
        <h1>AWARNESS</h1>
        <p>Why it's important to understand</p>
      </section>

      <section className="info-section">
        <div className="info-box">
          <h2>MINERALS</h2>
          <p>Cobalt</p>
        </div>
        <div className="info-box">
          <h2>STATISTIQUE</h2>
          <img src="/path-to-statistique-image.png" alt="Statistique" />
        </div>
        <div className="info-box">
          <h2>FOREIGN INFLUENCE</h2>
          <p>Insert Country Name</p>
        </div>
        <div className="info-box">
          <h2>LOCALS</h2>
          <p>Their reality</p>
        </div>
      </section>
    </div>
  );
};

export default Awareness;
