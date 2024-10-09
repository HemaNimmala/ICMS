import React from 'react';
import agraImg from '../images/agra.jpg'; // Adjust the path as needed
import chandigarhImg from '../images/chandigarh.jpg';
import gulmargImg from '../images/gulmarg.jpg';

export default function Places() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '40px' }}>Explore Famous Places in India</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
        {/* Agra Section */}
        <div style={{
          flexBasis: 'calc(33.33% - 40px)', 
          margin: '10px', 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          backgroundColor: '#f9f9f9', 
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', 
          minWidth: '300px'
        }}>
          <img src={agraImg} alt="Agra" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
          <h2 style={{ marginTop: '15px', fontSize: '24px', color: '#333' }}>Agra</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Agra is home to the iconic Taj Mahal and other Mughal architectural wonders like Agra Fort and Fatehpur Sikri.</p>
        </div>

        {/* Chandigarh Section */}
        <div style={{
          flexBasis: 'calc(33.33% - 40px)', 
          margin: '10px', 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          backgroundColor: '#f9f9f9', 
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', 
          minWidth: '300px'
        }}>
          <img src={chandigarhImg} alt="Chandigarh" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
          <h2 style={{ marginTop: '15px', fontSize: '24px', color: '#333' }}>Chandigarh</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Chandigarh is known for its urban design and modern architecture, featuring attractions like the Rock Garden and Sukhna Lake.</p>
        </div>

        {/* Gulmarg Section */}
        <div style={{
          flexBasis: 'calc(33.33% - 40px)', 
          margin: '10px', 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          backgroundColor: '#f9f9f9', 
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', 
          minWidth: '300px'
        }}>
          <img src={gulmargImg} alt="Gulmarg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
          <h2 style={{ marginTop: '15px', fontSize: '24px', color: '#333' }}>Gulmarg</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Gulmarg is a picturesque hill station known for skiing and the Gulmarg Gondola, one of the highest cable cars in the world.</p>
        </div>
      </div>
    </div>
  );
}
