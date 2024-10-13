import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-column">
          <h3>Yousafzai Electronics</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">➤</button>
          </form>
        </div>

        
        <div className="footer-column">
          <h3>Support</h3>
          <p>Peshawar, Pakistan</p>
          <p>Yousafzai@gmail.com</p>
          <p>+92 0000000</p>
        </div>

      
        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="download-buttons">
            <IoLogoGooglePlaystore className="download-icon"  />
            < FaAppStore />
          </div>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
