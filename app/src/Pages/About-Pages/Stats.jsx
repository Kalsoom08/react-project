// src/components/Stats.js
import React from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";


const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
      <RiCustomerService2Fill size={35} color="#000000" /> 
      
        <h3>95k</h3>
        <p>Customers</p>
      </div>
      <div className="stat-item">
        <MdOutlineProductionQuantityLimits  size={35} color="#000000"/>
        <h3>85k</h3>
        <p>Products Sold</p>
      </div>
      <div className="stat-item">
       
       <MdOutlineReviews size={35} color="#000000"/>
        <h3>75k</h3>
        <p>Reviews</p>
      </div>
    </section>
  );
};

export default Stats;
