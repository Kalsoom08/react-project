import React from 'react';
import HeroSection from '../Component/HeadSection/heroSec';
import Sales from '../Component/FlashSales/sales';
import Category from '../Component/Categories/category';
import BestSellings from '../Component/BestSellings/bestProducts';
import PromotionBanner from '../Component/Banner/baner';
import ProductsCard from '../Component/OurProducts/ourProductsList';
import Arrivals from '../Component/NewArrival/NewArrivals';
import Features from '../Component/Footer/Features';

const Home = ({ cart, setCart }) => {
  return (
    <div>
      <HeroSection />

      <Sales cart={cart} setCart={setCart} />
      <Category />
      <BestSellings />
      <PromotionBanner />
      <ProductsCard />
      <Arrivals />
      <Features />
    </div>
  );
};

export default Home;
