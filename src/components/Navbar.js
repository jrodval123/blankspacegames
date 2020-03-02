import React from 'react';
import { Link } from 'react-scroll'
import '../App.css'

function Navbar(props) {
  return (
    <aside>
          <div className="row">
            <img src={require("../assets/logo.png")} alt="asset1"></img>
            <hr width="90%"></hr>
            <div className="leCol">
              <Link
                activeClass="active"
                to="gameconcept"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Game Concept</Link>
              <Link
                activeClass="active"
                to="artstyle"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Art Style</Link>
              <Link
                activeClass="active"
                to="gamemechanics"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Game Mechanics</Link>
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Meet the Team</Link>
            </div>
          </div>
        </aside>
  );
}
export default Navbar;
