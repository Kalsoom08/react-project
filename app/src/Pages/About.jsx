// src/Pages/About.js
import React from 'react';
// import './App.css';

import Story from '../Pages/About-Pages/Story';
import Stats from '../Pages/About-Pages/Stats';
import Team from '../Pages/About-Pages/Team';

const About = () => {
  return (
    <div className="about-page">
 
      <Story />
      <Stats />
      <Team />
    </div>
  );
};

export default About;
