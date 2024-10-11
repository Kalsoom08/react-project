import React from 'react';
import './Sales.css'; 
import img1 from '../../assets/pic5.jpg'; 
import img2 from '../../assets/pic4.jpg'; 
const FlashSales = () => {
  const products = [
    {
      id: 1,
      image: img1,
      discount: 40,
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountedPrice: 120,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      image: img2,
      discount: 35,
      name: 'AK-900 Wired Keyboard',
      originalPrice: 150,
      discountedPrice: 96,
      rating: 4.7,
      reviews: 75,
    },
    {
      id: 2,
      image: img1,
      discount: 35,
      name: 'AK-900 Wired Keyboard',
      originalPrice: 150,
      discountedPrice: 96,
      rating: 4.7,
      reviews: 75,
    },
    {
      id: 2,
      image: img2,
      discount: 35,
      name: 'AK-900 Wired Keyboard',
      originalPrice: 150,
      discountedPrice: 96,
      rating: 4.7,
      reviews: 75,
    },
  
  ];

  return (
    <div className="flash-sales-container">
      <h1>Flash Sales</h1>
      <div className="products-row">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="discount-badge">-{product.discount}%</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="prices">
              <span className="discounted-price">${product.discountedPrice}</span>{' '}
              <span className="original-price">${product.originalPrice}</span>
            </p>
            <div className="rating">
              {'★'.repeat(Math.round(product.rating))} ({product.reviews})
            </div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
