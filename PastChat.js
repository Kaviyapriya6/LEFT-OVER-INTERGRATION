import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PastChat.css';

const PastChat = () => {
  const { id } = useParams(); // Get chat ID from URL
  const navigate = useNavigate();

  return (
    <div className="past-chat-container">
      <button className="back-button" onClick={() => navigate('/chat')}>Back</button>
      <h1>Chat with User {id}</h1>
      {/* Display chat messages here */}
      <p>Past messages will be displayed here...</p>
    </div>
  );
};

export default PastChat;
