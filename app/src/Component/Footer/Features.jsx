import React from "react";
import { FiTruck, FiHeadphones, FiShield } from "react-icons/fi";  
import "./Features.css"; 

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <FiTruck className="icon" />
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="feature-item">
        <FiHeadphones className="icon" />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="feature-item">
        <FiShield className="icon" />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
