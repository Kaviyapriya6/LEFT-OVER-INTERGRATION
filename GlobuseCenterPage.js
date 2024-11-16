import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GlobuseCenterPage.css';
import globuseImage from '../assets/globuse-center.jpg'; // Image of Globuse Center

const GlobuseCenterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="globuse-center-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <img src={globuseImage} alt="Globuse Center" className="place-image" />
      
      <div className="place-info">
        <span className="popular-tag">Popular</span>
        <h1>Globuse Center</h1>
        <div className="location">
          <p>Location: XYZ Street</p>
          <img src="../assets/heart-icon.png" alt="Favorite" className="heart-icon" />
        </div>
        
        <div className="rating">
          <p>Rating: ⭐⭐⭐⭐</p>
        </div>
        
        <p className="description">
          A description about Globuse Center. This place is known for its excellent food donations and community support.
        </p>
        
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default GlobuseCenterPage;
