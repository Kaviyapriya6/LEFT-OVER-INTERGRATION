import React from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-info">
        <div className="profile-image">👤</div> {/* Placeholder for profile image */}
        <h2>Your Name</h2>
        <p>Email: your-email@example.com</p>
      </div>
      <h2>Recently Ordered</h2>
      <div className="recent-orders">
        <div className="order-item">
          <img src="food-image-url" alt="Food" />
          <p>Food Name</p>
          <button className="buy-again-button">Buy Again</button>
        </div>
        {/* Add more recently ordered items as needed */}
      </div>
    </div>
  );
};

export default ProfilePage;
