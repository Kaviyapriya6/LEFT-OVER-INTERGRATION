import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ComplaintPage.css';

const ComplaintPage = () => {
  const [complaint, setComplaint] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Logic to handle complaint submission can be added here
    navigate('/map'); // Navigate back to the Main Page on submit
  };

  return (
    <div className="complaint-container">
      <h1>Raise a Complaint</h1>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Type your complaint here..."
        rows="4"
        cols="50"
      />
      <div className="buttons">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="skip-button" onClick={() => navigate('/map')}>Skip</button> {/* Navigate back to Main Page */}
      </div>
    </div>
  );
};

export default ComplaintPage;
