import { useNavigate } from 'react-router-dom';
import '../styles/OrderPage.css';
// Inside the OrderPage component
const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="order-container">
      <h1>Your Orders</h1>
      {/* Example of ordered food items */}
      <div className="order-item">
        <img src="food-image-url" alt="Food" />
        <p>Food Name</p>
        <button className="buy-again-button">Buy Again</button>
        <button className="complaint-button" onClick={() => navigate('/complaint')}>Raise Complaint</button> {/* Navigate to Complaint Page */}
      </div>
    </div>
  );
};
export default OrderPage;