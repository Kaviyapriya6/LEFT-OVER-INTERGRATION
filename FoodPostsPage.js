import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FoodPostsPage.css';

const FoodPostsPage = () => {
  const navigate = useNavigate();

  const foodPosts = [
    { id: 1, title: 'Pizza', likes: 10 },
    { id: 2, title: 'Pasta', likes: 5 },
    { id: 3, title: 'Burger', likes: 8 },
    // Add more food items as needed
  ];

  return (
    <div className="food-posts-container">
      <button className="back-button" onClick={() => navigate('/profile-editor')}>Back</button>
      <h1>Available Foods</h1>
      <div className="food-posts">
        {foodPosts.map((post) => (
          <div key={post.id} className="food-post">
            <h2>{post.title}</h2>
            <p>{post.likes} Likes</p>
            <button className="like-button">Like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPostsPage;
