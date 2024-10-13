import React, { useState } from 'react';
import './Login.css'; 
import img from '../assets/pic22.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={img} alt="Shopping Cart and Mobile" />
      </div>
      <div className="login-right">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="login-footer">
          <a href="#" className="forgot-password-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
