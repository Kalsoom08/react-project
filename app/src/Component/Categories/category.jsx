import React, { useState } from 'react';
import './category.css'; 
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad} from 'react-icons/fa';  

const BrowseByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Camera');

  const categories = [
    { id: 1, name: 'Phones', icon: <FaMobileAlt /> },
    { id: 2, name: 'Computers', icon: <FaLaptop /> },
    // { id: 3, name: 'SmartWatch', icon: <FaWatch /> },
    { id: 4, name: 'Camera', icon: <FaCamera /> },
    { id: 5, name: 'HeadPhones', icon: <FaHeadphones /> },
    { id: 6, name: 'Gaming', icon: <FaGamepad /> },
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        {/* <h2>Categories</h2> */}
        <p>Browse By Category</p>
      </div>

      <div className="category-row">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="prev-btn">◀</button>
        <button className="next-btn">▶</button>
      </div>
    </div>
  );
};

export default BrowseByCategory;
