import React, { useState } from 'react';
import './SignUp.css'; 
import img from '../assets/pic22.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
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
  
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={img} alt="Shopping Cart and Mobile" />
      </div>
      <div className="signup-right">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
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
          <button type="submit" className="create-account-btn">Create Account</button>
        
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
