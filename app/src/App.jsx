import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/HeadSection/navBar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Footer from './Component/Footer/Footer';
import Cart from './Component/FlashSales/cart';  
import AllProducts from './Component/BestSellings/viewAll';
import ProductDetails from './Component/FlashSales/ProductDeatils'; 
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]); 

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <Nav />

        <Routes>
          {/* Main Page Routes */}
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all-products" element={<AllProducts />} />

          {/* Cart Page Route */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

          {/* Product Details Route */}
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
