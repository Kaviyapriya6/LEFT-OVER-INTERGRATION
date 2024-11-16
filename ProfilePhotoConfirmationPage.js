import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfilePhotoConfirmationPage.css';

const ProfilePhotoConfirmationPage = () => {
  const navigate = useNavigate();

  // Mock uploaded image URL (you would replace this with the actual uploaded image)
  const uploadedImage = 'https://via.placeholder.com/150'; // Placeholder image

  return (
    <div className="profile-photo-confirmation-container">
      <button className="back-button" onClick={() => navigate('/profile-photo-upload')}>Back</button>
      <h1>Uploaded Profile Photo</h1>
      <img src={uploadedImage} alt="Uploaded Profile" className="uploaded-image" />
      // After the Next button in ProfilePhotoConfirmationPage component
<button className="next-button" onClick={() => navigate('/location-setup')}>Next</button>

    </div>
  );
};

export default ProfilePhotoConfirmationPage;
