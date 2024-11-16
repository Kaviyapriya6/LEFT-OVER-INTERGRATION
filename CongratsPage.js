import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CongratsPage.css';
import { FaCheckCircle } from 'react-icons/fa'; // Import checkmark icon
import { FaIconName } from 'react-icons/fa';

const CongratsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="congrats-container">
      <FaCheckCircle className="check-icon" />
      <h1>Your Profile is Ready to Use!</h1>
      <button className="try-order-button" onClick={() => navigate('/home')}>Try Order</button>

    </div>
  );
};

export default CongratsPage;
