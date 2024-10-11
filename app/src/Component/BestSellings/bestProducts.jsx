// ProductList.js
import React from 'react';
import ProductCard from '../BestSellings/bestproductCard';
import './bestProducts.css'
import img from '../../assets/img1.jpg';

const ProductList = () => {
    const products = [
        {
            name: 'The north coat',
            price: 260,
            oldPrice: 360,
            rating: 5,
            reviews: 65,
            image:img, 
        },
        {
            name: 'Gucci duffle bag',
            price: 960,
            oldPrice: 1160,
            rating: 5,
            reviews: 65,
            image:img,
        },
        {
            name: 'RGB liquid CPU Cooler',
            price: 160,
            oldPrice: 170,
            rating: 5,
            reviews: 65,
            image:img,
        },
        {
            name: 'Small BookShelf',
            price: 360,
            oldPrice: 370,
            rating: 5,
            reviews: 65,
            image:img,
        },
    ];

    return (
        <div className="product-list">
            <div className="header">
            <h1>Best Selling Products</h1>
                <button className="view-all-btn">View All</button>
            </div>
           
            <div className="products">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
