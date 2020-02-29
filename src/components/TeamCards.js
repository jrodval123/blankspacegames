import React from 'react';
import Card from './Card';
import '../App.css'

function TeamCards() {
  return (
    <body>
            <header>
                <h1 className="companyName" data-aos="fade-left" data-aos-delay="50">Blank Space Games Team</h1>
            </header>
            <div className="leRow">
                <Card memberName="Alex" role="Programmer" details="Story" anim="flip-up"></Card>
                <Card memberName="Allen" role="Artist" details="UI asset maker" anim="flip-down"></Card>
                <Card memberName="Cody" role="Programmer" details="Controls" anim="flip-up"></Card>
                <Card memberName="Jesus" role="Programmer" details="Gameplay Mechanics" anim="flip-down"></Card>
                <Card memberName="Michael" role="Programmer" details="Gameplay Mechanics,Audio" anim="flip-up"></Card>
                <Card memberName="Miles" role="Programmer" details="Controls" anim="flip-down"></Card>
            </div>
        </body>
  );
}

export default TeamCards;
