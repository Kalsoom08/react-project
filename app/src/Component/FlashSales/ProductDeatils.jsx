import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';  // Importing the CSS file

const ProductDetails = ({ cart, setCart }) => {
  const location = useLocation();
  const product = location.state.product;
  const navigate = useNavigate();

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    navigate('/cart');
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-rating">
            Rating: {'★'.repeat(Math.round(product.rating))} ({product.reviews} reviews)
          </p>
          <p className="product-price">
            <span className="discounted-price">${product.discountedPrice}</span>
            <span className="original-price">${product.originalPrice}</span>
          </p>
          <p className="product-discount">Discount: {product.discount}% off</p>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
