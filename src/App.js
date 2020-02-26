import React from 'react';
import Navbar from './components/Navbar';
import GameDesc from './components/GameDesc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { render } from '@testing-library/react';


function App() {
  return (
    <body className="body">
      <div className="leRow">
        <div className="col-3" data-aos="fade-right">
          <Navbar/>
        </div>
        <div className="col-9">
          <GameDesc/>
          <GameDesc/>
        </div>
      </div>
    </body>
  );
}

export default App;