import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Confirm Order</h1>

      <div className="delivery-container">
        <h2>Deliver To:</h2>
        <p>123 Main St, City, Country</p>
        <button className="edit-button">Edit</button>
      </div>

      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CheckoutPage;
