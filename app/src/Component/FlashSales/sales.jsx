import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sales.css';
import img1 from '../../assets/imgg(1).png';
import img2 from '../../assets/pic4.png';
import img3 from '../../assets/pic5.png';
import img4 from '../../assets/pic6.png';

const Sales = ({ cart, setCart }) => {
  const navigate = useNavigate();

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
      id: 3,
      image: img3,
      discount: 40,
      name: 'LED',
      originalPrice: 160,
      discountedPrice: 120,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 4,
      image: img4,
      discount: 35,
      name: 'AK-900 Wired Keyboard',
      originalPrice: 150,
      discountedPrice: 96,
      rating: 4.7,
      reviews: 75,
    },
  ];

  const addToCart = (product) => {
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

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="sales-section">
      <h1>Flash Sales</h1>
      <div className="products-row">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleProductClick(product)}
            />
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
            <p>{product.name}</p>
            <p className="prices">
              <span className="discounted-price">${product.discountedPrice}</span>{' '}
              <span className="original-price">${product.originalPrice}</span>
            </p>
            <div className="rating">
              {'★'.repeat(Math.round(product.rating))} ({product.reviews})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
