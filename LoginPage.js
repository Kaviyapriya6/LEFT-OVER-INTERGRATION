import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCreateAccount = () => {
    navigate('/ProfilePhotoConfirmationPage');  // Redirects to the profile confirmation page
  };
  const handleSignUp = () => {
    // Logic for sign-up (e.g., API call)
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Leftover Logo" className="logo" />
      <h1 className="app-name">Leftover</h1>
      <p className="brand-text">Deliver Excess Food</p>

      <div className="signup-section">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Keep me signed in
          </label>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Email me about nearest foods
          </label>
        </div>
        <button onClick={handleCreateAccount}>Create Account</button>
         
        <p className="existing-account" onClick={() => navigate('/signup')}>
          Already have an account? <u>Login</u>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
