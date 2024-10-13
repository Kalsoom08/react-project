// src/components/Team.js
import React from 'react';
import img from '../../assets/pic19.png';
import img2 from '../../assets/pic20.png';
import img3 from '../../assets/pic21.png';

const teamMembers = [
  { name: 'Tom Brown', role: 'CEO', img: img },
  { name: 'Anna White', role: 'CFO', img: img3 },
  { name: 'Jim Black', role: 'CTO', img: img2 },
];

const Team = () => {
  return (
    <section className="team">
 
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
