import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Map.css';

const MapPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(''); // State for location input

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location state
  };

  return (
    <div className="map-container">
      <button className="back-button" onClick={() => navigate('/location-setup')}>Back</button>
      <h1>Set Location</h1>
      <div className="map-placeholder"> {/* Placeholder for the map */}
        <p>Map will be displayed here.</p>
      </div>
      <label className="find-location-label">Find Location:</label>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        className="location-input"
        placeholder="Enter your location"
      />
      <p className="selected-location">{location}</p> {/* Display selected location */}
      // After the Set Location button in MapPage component
<button className="set-location-button" onClick={() => navigate('/congrats')}>Set Location</button>

    </div>
  );
};

export default MapPage;
