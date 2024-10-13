import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ProductCard from '../BestSellings/bestproductCard';
import './bestProducts.css';
import img from '../../assets/pic7.png';
import img2 from '../../assets/pic8.png';
import img3 from '../../assets/pic9.png';
import img4 from '../../assets/pic10.png';

const ProductList = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const products = [
        {
            name: 'The north coat',
            price: 260,
            oldPrice: 360,
            rating: 5,
            reviews: 65,
            image: img,
        },
        {
            name: 'Gucci duffle bag',
            price: 960,
            oldPrice: 1160,
            rating: 5,
            reviews: 65,
            image: img2,
        },
        {
            name: 'RGB liquid CPU Cooler',
            price: 160,
            oldPrice: 170,
            rating: 5,
            reviews: 65,
            image: img3,
        },
        {
            name: 'Small BookShelf',
            price: 360,
            oldPrice: 370,
            rating: 5,
            reviews: 65,
            image: img4,
        },
    ];

    const handleViewAll = () => {
        navigate('/all-products'); // Navigate to All Products page
    };

    return (
        <div className="product-list">
            <div className="header">
                <h1>Best Selling Products</h1>
                <button className="view-all-btn" onClick={handleViewAll}>
                    View All
                </button>
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
