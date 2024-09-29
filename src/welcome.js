// src/Welcome.js
import React from 'react';
import './welcome.css';

const Welcome = ({ username }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome, {username}!</h1> {/* Display the username */}
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;