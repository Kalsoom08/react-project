// src/components/ProductCard.js

import React from 'react';
import { FaHeart, FaEye, FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-actions">
        <FaHeart />
        <FaEye />
      </div>
     
      <p className='text-[14px]'>{product.name}</p>
      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < product.rating ? 'filled' : ''} />
        ))}
        <span>({product.reviews}, {product.price})</span>
      </div>
      <button className="add-to-cart">
        <FaShoppingCart /> 
      </button>
    </div>
  );
};

export default ProductCard;
