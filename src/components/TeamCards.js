import React from 'react';
import Card from './Card';
import '../App.css'

function TeamCards() {
  return (
    <body>
            <header>
                <h1 className="companyName" data-aos="fade-left" data-aos-delay="50">Blank Space Games Team</h1>
            </header>
            <div className="leRow"data-aos="fade-left">
                <Card/>
                <Card/>
            </div>
        </body>
  );
}

export default TeamCards;
