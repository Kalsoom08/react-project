import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Nav = () => {
  return (
    <div className='main'>
      <div className='header'>
        <div className='info'>Yousafzai Electronics</div>
        <div className='nav-links'>
          <ul>
            <li id='lknk'><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">Sign Up</Link></li> 
            <li><Link to="/login">Login</Link></li>   
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Nav;
