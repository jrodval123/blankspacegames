import React from 'react';

import '../App.css'

function Card(props) {
    return (
        <body>
            <div className="leRow" data-aos={props.anim}>
                <div className="leCol card col-12">
                <div className="container">
                    <img src="https://cdn1.iconfinder.com/data/icons/avatar-professions/160/coder-512.png" width="100px" height="200px" alt="asset1" className="cardImg"></img>
                </div>
                    <p className="cardInfo"> {props.memberName}</p>
                    <p className="cardInfo"> {props.role}</p>
                    <p className="cardInfo"> {props.details}</p>
                </div>
            </div>
        </body>
    );
}

export default Card;
