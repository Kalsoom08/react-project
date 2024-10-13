import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';  // Import the new CSS file

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Price: ${item.discountedPrice}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="total-section">
            <h3>Total: ${getTotal()}</h3>
          </div>
        </>
      )}

      <button className="return-button" onClick={() => navigate('/')}>
        Return to Shop
      </button>
    </div>
  );
};

export default Cart;
