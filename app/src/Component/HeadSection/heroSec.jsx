import React, { useState } from 'react';
import '../HeadSection/heroSec.css'; 
import logo2 from '../../assets/pic5.jpg'; 
import logo1 from '../../assets/pic2.png'; 
import logo3 from '../../assets/pic23.jpg'; 

const HeroSection = () => {
  const images = [logo1, logo2, logo3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <h1>Upto 70% Off</h1>
      <p>Your one-stop shop for all electronic needs.</p>
      <button className="hero-button">Shop Now</button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
