import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/SecondPage.css';
import secondPageImage from '../assets/second-page-image.png';

const SecondPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNext = () => {
    navigate('/third'); // Navigate to the third page
  };

  return (
    <div className="second-page-container">
      <img src={secondPageImage} alt="Food Waste" className="second-page-image" />
      <h2>Please Don't Waste Food</h2>
      <p>Throwing away food is a missed opportunity to feed and support others.</p>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default SecondPage;
