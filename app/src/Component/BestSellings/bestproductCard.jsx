import React from 'react';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="image-section">
                <img src={product.image} alt={product.name} />
                <div className="icons">
                    <AiOutlineHeart size={24} />
                    <AiOutlineEye size={24} />
                </div>
            </div>
            <h3>{product.name}</h3>
            <p>
                <span className="price">${product.price}</span>{' '}
                <span className="old-price">${product.oldPrice}</span>
            </p>
            <div className="rating">
                {'★'.repeat(product.rating)}{' '}
                <span className="reviews">({product.reviews})</span>
            </div>
        </div>
    );
};

export default ProductCard;
