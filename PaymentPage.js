import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <button className="back-button" onClick={() => navigate('/profile-setup')}>Back</button>
      <h1>Select Payment Method</h1>
      <div className="payment-options">
        <button className="payment-button">Google Pay</button>
        <button className="payment-button">PhonePe</button>
        <button className="payment-button">Paytm</button>
        {/* Add more payment options as needed */}
      </div>
      import ProfileEditorPage from './components/ProfileEditorPage'; // Import ProfileEditorPage
    </div>
  );
};

export default PaymentPage;
