import React from 'react';
import cultureImg from '../images/culture.jpg'; // Adjust the path as needed

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Indian Culture</h1>
      <p>Discover the rich history, diversity, and traditions of India.</p>
      <img src={cultureImg} alt="Indian Culture" />
    </div>
  );
}
