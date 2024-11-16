import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderDetailsPage.css';

const OrderDetailsPage = () => {
  const navigate = useNavigate();

  const foodItems = [
    {
      id: 1,
      name: "Pasta",
      image: "../assets/pasta.jpg",
      peopleCount: 29,
      expiresIn: "2 hours",
    },
    {
      id: 2,
      name: "Pizza",
      image: "../assets/pizza.jpg",
      peopleCount: 25,
      expiresIn: "3 hours",
    },
    // Add more food items as needed
  ];

  return (
    <div className="order-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      
      {foodItems.map(item => (
        <div className="food-item" key={item.id}>
          <img src={item.image} alt={item.name} className="food-image" />
          <div className="food-info">
            <h2>{item.name}</h2>
            <p>{item.peopleCount} members</p>
            <p>Expires within: {item.expiresIn}</p>
          </div>
          <button className="delete-button">Delete</button>
        </div>
      ))}

      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default OrderDetailsPage;
