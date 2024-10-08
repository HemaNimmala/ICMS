import React from 'react';
import contactImg from '../images/contact.jpg'; // Adjust the path as needed

export default function Contacts() {
  return (
    <div className="contacts" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <h1>Contact Us</h1>
        <p>You can reach us at:</p>
        <ul>
          <li>Email: info@indianculture.com</li>
          <li>Phone: +91 12345 67890</li>
          <li>Address: 123 Indian Culture St, Delhi, India</li>
        </ul>
      </div>
      <img 
        src={contactImg} 
        alt="Contact Us" 
        style={{ width: '250px', height: 'auto' }} // Increased size
      />
    </div>
  );
}
