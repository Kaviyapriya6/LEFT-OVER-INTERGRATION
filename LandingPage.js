import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import logo from '../assets/logo.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Link to="/second">
        <img src={logo} alt="Leftover Logo" className="logo" />
      </Link>
      <div className="food-layout">
        <p>Feeding the needy with leftover food</p>
      </div>
    </div>
  );
};

export default LandingPage;
