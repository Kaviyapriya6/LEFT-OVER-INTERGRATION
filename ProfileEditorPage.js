import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileEditorPage.css';

const ProfileEditorPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [type, setType] = useState('');

  return (
    <div className="profile-editor-container">
      <button className="cancel-button" onClick={() => navigate('/payment')}>Cancel</button>
      <h1>Edit Profile</h1>
      <div className="form-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Website</label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select</option>
          <option value="mall">Mall</option>
          <option value="pg">PG</option>
          <option value="temple">Temple</option>
          <option value="hotel">Hotel</option>
        </select>
      </div>
      // Inside the ProfileEditorPage component
<button className="done-button" onClick={() => navigate('/food-posts')}>Done</button>

    </div>
  );
};

export default ProfileEditorPage;
