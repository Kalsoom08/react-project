import React from 'react';
import './App.css';
import Nav from './Component/HeadSection/navBar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'; 
import About from './Pages/about';
import Home from './Pages/Home';
import SignUp from './Pages/signUp'; 
import Login from './Pages/logIn';   
import HeroSection from './Component/HeadSection/heroSec';
import Sales from './Component/FlashSales/sales'
import Category from './Component/Categories/category'
import BestSellings from './Component/BestSellings/bestProducts';
import PromotionBanner from './Component/Banner/baner';
import ProductsCard from './Component/OurProducts/ourProductsList';


function App() {
  return ( 
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <HeroSection></HeroSection>
      <Sales></Sales>
      <Category></Category>
      <BestSellings></BestSellings>
      <PromotionBanner></PromotionBanner>
      <ProductsCard></ProductsCard>
    </div>
  );
}

export default App;
