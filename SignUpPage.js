import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css';
import logo from '../assets/logo.png';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSignUp = () => {
      if (password === confirmPassword) {
        // Implement your signup logic here
        alert('Signup successful!');
        navigate('/login'); // Redirect to login page on successful signup
      } else {
        alert("Passwords don't match!");
      }
    };
  
    const handleLoginRedirect = () => {
      navigate('/main'); // Redirect to main page
    };
  
    return (
      <div className="signup-container">
        <h1>Create Your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <p>Already have an account?</p>
        <button onClick={handleLoginRedirect}>Login</button>
      </div>
    );
  };
  
  export default SignUpPage;
