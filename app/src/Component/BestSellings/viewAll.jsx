// src/components/AllProducts.jsx
import React from 'react';
import ProductCard from '../BestSellings/bestproductCard'; // Import the ProductCard component
// import './allProducts.css'; // Add your CSS styles here
import img from '../../assets/pic7.png';
import img2 from '../../assets/pic8.png';
import img3 from '../../assets/pic9.png';
import img4 from '../../assets/pic10.png';

const AllProducts = () => {
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
        // Add more products as needed
    ];

    return (
        <div className="all-products">
            <h1>All Products</h1>
            <div className="products">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
