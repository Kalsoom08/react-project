import React from 'react';
import './Card.css';

const Card = ({ image, title, description, linkText, cardType }) => {
  return (
    <div className={`card ${cardType}`}>
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="shop-now">{linkText}</a>
      </div>
    </div>
  );
}

export default Card;
