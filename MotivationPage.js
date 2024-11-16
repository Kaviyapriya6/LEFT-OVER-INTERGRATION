import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MotivationPage.css';

const MotivationPage = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, message: 'You have new food posts available!', time: '2 mins ago' },
    { id: 2, message: 'Your order has been confirmed!', time: '10 mins ago' },
    { id: 3, message: 'A new user has signed up!', time: '30 mins ago' },
    // Add more notifications as needed
  ];

  return (
    <div className="motivation-container">
      <button className="back-button" onClick={() => navigate('/map')}>Back</button>
      <h1>Recent Notifications</h1>
      {notifications.map((notification) => (
        <div className="notification-item" key={notification.id}>
          <p>{notification.message}</p>
          <span className="notification-time">{notification.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MotivationPage;
