import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Here you could add email/phone number verification logic if needed
    navigate('/reset-password');
  };

  return (
    <div className="forget-password-container">
      <h1>Verify Your Email or Phone Number</h1>
      <input
        type="text"
        placeholder="Enter your email or phone number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ForgetPassword;
