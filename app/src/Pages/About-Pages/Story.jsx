// src/components/Story.js
import React from 'react';
import'./AboutPages.css'
import img from '../../assets/pic18.png';

const Story = () => {
  return (
    <section className="story">
      <div> <h2>Our Story</h2>
      <p>
        Welcome to our e-commerce platform, where we believe in bringing you the best products at
        the best prices. We've grown rapidly from a small team to a trusted brand, serving thousands of
        customers worldwide. Welcome to our e-commerce platform, where we believe in bringing you the best products at
        the best prices. We've grown rapidly from a small team to a trusted brand, serving thousands of
        customers worldwide.
      </p></div>

      <div>
      <img src={img} alt="Shopping Story" />
      </div>
     
    </section>
  );
};

export default Story;
