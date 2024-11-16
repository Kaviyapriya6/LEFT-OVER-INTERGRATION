import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="reset-password-container">
      <h1>Your password has been reset.</h1>
      <button onClick={() => navigate('/sign-up')}>Back to Sign Up</button>
    </div>
  );
};

export default ResetPassword;
