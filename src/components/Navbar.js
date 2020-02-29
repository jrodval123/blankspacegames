import React from 'react';

import '../App.css'

function Navbar() {
  return (
    <aside>
      <div className="row">
        <img src={require("../assets/logo.png")} alt="asset1"></img>
        <hr width="90%"></hr>
        <h2 className="navitem"><a href={`https:/${"jrodval123.github.io/blankspacegames"}`}>Game Concept</a></h2>
        <h2 className="navitem"><a href={`https:/${"jrodval123.github.io/blankspacegames"}`}>Art Style</a></h2>
        <h2 className="navitem"><a href={`https:/${"jrodval123.github.io/blankspacegames"}`}>Game Mechanics</a></h2>
        <h2 className="navitem"><a href={`https:/${"jrodval123.github.io/blankspacegames"}`}>Meet the Team</a></h2>
        {/* <h2 className="navitem"><a href={`https:/${"jrodval123.github.io/blankspacegames"}`}>Contact</a>Contact</h2> */}
      </div>
    </aside>
  );
}
export default Navbar;
