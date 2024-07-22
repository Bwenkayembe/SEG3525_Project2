import React, { useState } from 'react';
import './ActionContent.css';

const ActionContent = ({ type }) => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <button className="action-button" onClick={() => setShowModal(true)}>Go</button>
      {showModal && (
        <div className="action-modal">
          <div className="action-modal-content">
            <span className="action-close" onClick={() => setShowModal(false)}>&times;</span>
            <h2 className="action-modal-header">{type === 'blog' ? 'Write Your Blog' : 'Plan Your Protest'}</h2>
            {type === 'blog' && (
              <div>
                <textarea className="action-textarea" placeholder="Write your blog here..."></textarea>
                <button className="action-button" onClick={handleSubmit}>Submit</button>
                {submitted && <p className="action-message">Thank you for submitting, your blog will be read by one of our superiors.</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionContent;
