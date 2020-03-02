import React from 'react';
import Navbar from './components/Navbar';
import GameDesc from './components/GameDesc';
import TeamCards from './components/TeamCards';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll'
import './App.css';


function App() {
  return (
    <body className="body">
      <div className="leRow">
        <div className="col-3 col-" data-aos="fade-right">
          <Navbar gc="gameconcept"></Navbar>
        </div>
        <div className="col-9">
          <GameDesc 
              id="gameconcept"
              section="Trap Hero"
              content="Trap Hero is our attempt to build upon the foundations Guitar Hero set for music games in the mid-2000s, 
                    but to modernize it by building it on a portable platform like Unity, focusing the song selection instead on 
                    hip-hop as this genre has gained much more pop appeal, testing Unity’s capacity to allow novel input methods 
                    used in actual hip hop production like MIDI keyboards/pads, testing our capability to 
                    implement an artificial-intelligence-based lyric-scoring algorithm that would grade the player’s attempts to rap 
                    along to the song, and to create a distinct, bright art style that is representative of typical graphics used in 
                    high production hip-hop promotion." 
              image1="https://cdn.vox-cdn.com/thumbor/ZUSSl5rZPA9vhaXfDMMC27oR6Cg=/158x0:1778x1080/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/46114374/7239_0229_GHLive_Stage1.0.0.jpg"
              image2="https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/Reunion%20Tour%3A%20The%20Best%20And%20Worst%20Of%20Guitar%20Hero/Gh3_2D00_337_2D00_610.jpg">
              </GameDesc>
              <br></br>
              <br></br>
          <GameDesc
            id="artstyle"
            section="Art Style"
            content="The art style of Trap Hero is intended to be similar to the visuals used in current trap music, except with our own technical spin to it. A blend between glitchy forms and neon visuals will populate the game primarily in the UI and 2D assets. The 3D assets will be as complementary to those visual as possible, but are likely to be more on the basic side, both to save space and to speed production along.
            The 2D assets will take the forefront of most screens as UI and HUDs, while 3D assets will populate the scene as player representation, interactables, and background details. The 2D designs plan to stay consistent throughout the game, changing little to none, while the 3D assets evolve as the game moves forward."
            image1="https://cdn5.vectorstock.com/i/1000x1000/14/64/synthwave-vaporwave-retrowave-glitch-arrows-vector-26221464.jpg"
            image2="https://cdn2.vectorstock.com/i/1000x1000/48/26/glitch-arrows-pointers-direction-set-futuristic-vector-25624826.jpg"
          ></GameDesc>
          <GameDesc
            id="gamemechanics"
            section="Game Mechanics"
            content="The game’s “story” or career mode will consist of sets of ~5 songs which can be practiced individually or played sequentially as the producer character’s “gig”. The player, once they feel adequately equipped through practicing the songs, performs all of them in a row, is graded on their performance, and is then granted “experience” in the form of notoriety after the gig.
            Each song will consist of a set of notes that must be played in rhythm with the song chosen by the player. If  the player chooses to play along with the drums, each note corresponds to some piece of a drum kit, e.g. the kick drum, snare, hi hat, etc. If the player chooses to play along with the melody, a transcribed version of the main melody in the selected song must be played along with using either the keyboard or, if a Unity library sufficient to handle this type of input exists, keys on a MIDI keyboard used in typical music production.
            "
            image1="https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/MPD226_ortho_1200x750_web-fc98b1ab9de52db4bb238dd7cc472f54.jpg"
            image2="https://www.hytekelectronics.co.uk/wp-content/uploads/2019/10/LKM-overhead-1018-530.png"
          ></GameDesc>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <TeamCards id="team"/>
        </div>
      </div>
    </body>
  );
}

export default App;