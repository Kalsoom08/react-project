import React from 'react';
import { useNavigate } from 'react-router-dom'; //(For OurProduct ViewAll)
import ProductCard from './OurProductsCard';
import img from '../../assets/pic11.png';
import img2 from '../../assets/pic10.png';
import img3 from '../../assets/pic12.png';
import img4 from '../../assets/pic10.png';

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
    image: img2,
  },
  {
    id: 3,
    name: 'RGB Liquid CPU Cooler',
    price: '$160',
    rating: 4,
    reviews: 45,
    image: img3,
  },
  {
    id: 4,
    name: 'Small Bookshelf',
    price: '$80',
    rating: 4,
    reviews: 20,
    image: img4,
  },
];

const Products = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewAllProducts = () => {
    navigate('/all-products'); // Navigate to All Products page
  };

  return (
    <div className="products-grid">
      <h1>Explore Our Products</h1>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="view-all-products" onClick={handleViewAllProducts}>
        View All Products
      </button>
    </div>
  );
};

export default Products;
