import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (username && email && password) {
      alert('Sign-up successful!');
      // You can add further logic here, such as sending the data to a server
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for Indian Culture</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p className="footer-text">&copy; 2024 Indian Culture. All rights reserved.</p>
    </div>
  );
}
