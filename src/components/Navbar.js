import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Navbar.css'; // Ensure to import the CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/places">Places</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
