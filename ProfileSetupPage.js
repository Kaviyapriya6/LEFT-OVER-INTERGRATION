
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileSetupPage.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
<Link to="/payment" className="food-providers-button">Food Providers</Link>

const ProfileSetupPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    // Logic to handle role selection
  };

  return (
    <div className="profile-setup-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Fill in your bio to get started</h1>
      <p>This data will be displayed in your account profile for security.</p>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      
      <h2>Who are you?</h2>
      <button className="role-button" onClick={() => handleRoleSelection('Food Provider')}>Food Provider</button>
      // Inside the Profile Setup Page component
<button className="child-home-button" onClick={() => navigate('/profile-photo-upload')}>Child Home</button>

      <button className="role-button" onClick={() => handleRoleSelection('Any Others')}>Any Others</button>
    </div>
    // <Link to="/payment" className="food-providers-button">Food Providers</Link>
  );
};

export default ProfileSetupPage;
