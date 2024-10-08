import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (this can be enhanced)
    if (username === 'admin' && password === 'password123') {
      alert('Login successful!');
      // You can redirect or do other logic here
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to Indian Culture</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="footer-text">&copy; 2024 Indian Culture. All rights reserved.</p>
    </div>
  );
}
