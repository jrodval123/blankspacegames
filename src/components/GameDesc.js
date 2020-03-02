import React from 'react';
import '../App.css'

function GameDesc(props) {
    return (
        <body id={props.id}>
            <header>
            <h1 className="companyName" data-aos="fade-left" data-aos-delay="50">{props.section}</h1>
            </header>
            <div data-aos="fade-left">
                <p> 
                {props.content}
                </p>
                <div className="leRow" style={{justifyContent:'start'}}>
                    <img className="coolImages" src={props.image1} alt=""></img>
                    <img className="coolImages" src={props.image2} alt=""></img>
                </div>
            </div>
        </body>
    );
}

export default GameDesc;

