import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChatPage.css';

const ChatPage = () => {
  const navigate = useNavigate();

  const chatData = [
    { id: 1, name: 'John Doe', time: '12:30 PM', message: 'Hello! How can I help you?' },
    { id: 2, name: 'Jane Smith', time: '1:00 PM', message: 'I have some extra food to share.' },
    // Add more chat data as needed
  ];

  return (
    <div className="chat-container">
      <button className="back-button" onClick={() => navigate('/map')}>Back</button>
      <h1>Chat</h1>
      {chatData.map((chat) => (
        <div className="chat-item" key={chat.id} onClick={() => navigate(`/past-chat/${chat.id}`)}>
          <div className="profile-icon">👤</div>
          <div className="chat-info">
            <h3>{chat.name}</h3>
            <p>{chat.message}</p>
          </div>
          <span className="chat-time">{chat.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatPage;
