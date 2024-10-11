import React from 'react';
import './heroSec.css'; 
import logo from '../../assets/pic5.jpg'; 

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${logo})` }}>
      <h1>Upto 70% Off</h1>
      <p>Your one-stop shop for all electronic needs.</p>
      <button className="hero-button">Shop Now</button>
    </div>
  );
};

export default HeroSection;
