import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your feedback is important to us.</p>
      <button className="feedback-button">Get Feedback</button>
      <button className="submit-button">Submit</button>
      <button className="skip-button" onClick={() => navigate('/map')}>Skip</button> {/* Navigate back to Map Page */}
    </div>
  );
};

export default ThankYouPage;
