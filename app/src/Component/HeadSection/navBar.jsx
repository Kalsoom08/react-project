import React from 'react';
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './nav.css'; 

const Nav = () => {
  return (
    <div>
      <div className='header'>
        <div className='top-header'>
          <div className='left-section'>
            <div className='info'>Yousafzai Electronics</div>
            <div className='nav-links'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signup">Sign Up</Link></li> 
                <li><Link to="/login">Login</Link></li>   
              </ul>
            </div>
          </div>
          
          <div className='icon'>
            <CiShoppingCart />
            <CiSearch />
            <CiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
