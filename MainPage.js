import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';
import logo from '../assets/logo.png';
import bellIcon from '../assets/bell.png'; // Assuming you have a bell icon image
import wasteFoodImage from '../assets/waste-food.png'; // Image of "Please don’t waste food"
import { Link } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Find the Excess Food <img src={bellIcon} alt="Notification" className="bell-icon" /></h1>
      
      <input type="text" className="search-bar" placeholder="Search for food..." />
      <div className="filter-options">
        {/* Add filter options as needed */}
      </div>
      
      <img src={wasteFoodImage} alt="Please don’t waste food" className="waste-food-image" />
      
      <h2>Nearest Food Post</h2>
      <p className="view-more" onClick={() => navigate('/viewmore')}>View More</p>
      
      <div className="place-container">
        <div className="place-card">
          <h3>Globuse Center</h3>
          <p>Log: XYZ</p>
          <p>Updated: 12 mins ago</p>
        </div>
        <div className="place-card">
          <h3>What’s Up PG</h3>
          <p>Log: ABC</p>
          <p>Updated: 15 mins ago</p>
        </div>
      </div>

      <nav>
  <Link to="/home">🏠 Home</Link>
  <Link to="/order">🛒 Cart</Link>
  <Link to="/profile">👤 Profile</Link>
  <Link to="/chat">💬 Messages</Link>
  <Link to="/motivation">🔔 Notifications</Link> {/* Link to Motivation Page */}
</nav>

    </div>
  );
};

export default MainPage;
