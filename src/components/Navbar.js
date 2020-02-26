import React from 'react';

import '../App.css'

function Navbar() {
  return (
    <aside>
      <div className="row">
        <img src={require("../assets/logo.png")} alt="asset1"></img>
        <hr width="90%"></hr>
        <h2 className="navitem">Game Concept</h2>
        <h2 className="navitem">Art Style</h2>
        <h2 className="navitem">Game Mechanics</h2>
        <h2 className="navitem">Meet the Team</h2>
        <h2 className="navitem">Contact</h2>
      </div>
    </aside>
  );
}

export default Navbar;
