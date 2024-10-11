import React from 'react';
import ProductCard from './OurProductsCard';
import './productlist.css'
import img from '../../assets/pic2.jpg';

const products = [
  {
    id: 1,
    name: 'Breed Dry Dog Food',
    price: '$100',
    rating: 3,
    reviews: 35,
    image: img,
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    price: '$360',
    rating: 5,
    reviews: 95,
    image: img,
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    price: '$360',
    rating: 5,
    reviews: 95,
    image: img,
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    price: '$360',
    rating: 5,
    reviews: 95,
    image: img,
  },
];

const Products = () => {
  return (
    <div className="products-grid">
      <h2>Explore Our Products</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="view-all-products">View All Products</button>
    </div>
  );
};

export default Products;
