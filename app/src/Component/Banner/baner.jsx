
import React from 'react';
import CountdownTimer from './counter';
import '../Banner/baner.css'
import img from '../../assets/img1.png'

const PromotionBanner = () => {
    const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; 

    return (
        <div className="promotion-banner">
            <div className="promotion-content">
                <h3>Categories</h3>
                <h1>Enhance Your Music Experience</h1>
                <CountdownTimer targetDate={targetDate} />
                <button className="buy-btn">Buy Now!</button>
            </div>
            <div className="product-imag">
                <img src={img} alt="Product" /> 
            </div>
        </div>
    );
};

export default PromotionBanner;
