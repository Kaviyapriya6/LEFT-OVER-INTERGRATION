import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ThirdPage.css';
import thirdPageImage from '../assets/third-page-image.png';

const ThirdPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="third-page-container">
      <img src={thirdPageImage} alt="Share Food" className="third-page-image" />
      <h2>Share Your Extra Food on Our Leftover App</h2>
      <p>Connect, share, care: reduce food waste with Leftover!</p>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default ThirdPage;
