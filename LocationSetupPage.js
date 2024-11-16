import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LocationSetupPage.css';

const LocationSetupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="location-setup-container">
      <button className="back-button" onClick={() => navigate('/profile-photo-confirmation')}>Back</button>
      <h1>Location Setup</h1>
      <p>Select your location to get started:</p>
      <input type="text" placeholder="Enter your location" className="location-input" />
      // After the Next button in LocationSetupPage component
<button className="next-button" onClick={() => navigate('/map')}>Set Location</button>

    </div>
  );
};

export default LocationSetupPage;
