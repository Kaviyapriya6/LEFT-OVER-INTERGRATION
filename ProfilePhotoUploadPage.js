import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfilePhotoUploadPage.css';

const ProfilePhotoUploadPage = () => {
  const navigate = useNavigate();

  const handleTakePhoto = () => {
    // Logic to open the camera goes here
    alert('Camera opened');
  };

  const handleSelectFromGallery = () => {
    // Logic to open the gallery goes here
    alert('Gallery opened');
  };

  return (
    <div className="profile-photo-upload-container">
      <button className="back-button" onClick={() => navigate('/profile-setup')}>Back</button>
      <h1>Upload Profile Photo</h1>
      <button className="select-gallery-button" onClick={handleSelectFromGallery}>Select from Gallery</button>
      <button className="take-photo-button" onClick={handleTakePhoto}>Take Photo</button>
      // After the Next button in ProfilePhotoUploadPage component
<button className="next-button" onClick={() => navigate('/profile-photo-confirmation')}>Next</button>

    </div>
  );
};

export default ProfilePhotoUploadPage;
