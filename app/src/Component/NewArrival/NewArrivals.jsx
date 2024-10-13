import React from 'react';
import Card from './Card';


import ps5Img from '../../assets/pic14.png';
import womensCollectionImg from '../../assets/pic17.png';
import speakersImg from '../../assets/pic15.png';
import perfumeImg from '../../assets/pic16.png';

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h2 className="section-title">New Arrival</h2>
      <div className="featured">
        <Card 
          image={ps5Img}
          title="PlayStation 5" 
          description="Black and White version of the PS5 coming out on sale." 
          linkText="Shop Now"
          cardType="large"  
        />
        <Card 
          image={womensCollectionImg}
          title="Women's Collections" 
          description="Featured woman collections that give you another vibe."
          linkText="Shop Now"
          
        />
        <Card 
          image={speakersImg}
          title="Speakers" 
          description="Amazon wireless speakers." 
          linkText="Shop Now"
         
        />
       
       <Card 
          image={perfumeImg} 
          title="Perfume" 
          description="GUCCI INTENSE OUD EDP." 
          linkText="Shop Now"
         
        />
         <Card 
          image={perfumeImg} 
          title="Perfume" 
          description="GUCCI INTENSE OUD EDP." 
          linkText="Shop Now"
         
        />
      </div>
      
    </div>
  );
}

export default NewArrivals;
