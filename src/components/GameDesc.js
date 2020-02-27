import React from 'react';
import '../App.css'

function GameDesc() {
    return (
        <body>
            <header>
                <h1 className="companyName" data-aos="fade-left" data-aos-delay="50">Trap Hero</h1>
            </header>
            <div data-aos="fade-left">
                <p>
                Trap Hero is our attempt to build upon the foundations Guitar Hero set for music games in the mid-2000s, 
                but to modernize it by building it on a portable platform like Unity, focusing the song selection instead on 
                hip-hop as this genre has gained much more pop appeal, testing Unity’s capacity to allow novel input methods 
                used in actual hip hop production like MIDI keyboards/pads, testing our capability to 
                implement an artificial-intelligence-based lyric-scoring algorithm that would grade the player’s attempts to rap 
                along to the song, and to create a distinct, bright art style that is representative of typical graphics used in 
                high production hip-hop promotion. 
                </p>
                <div className="leRow" style={{justifyContent:'start'}}>
                    <img  className="coolImages"src="https://cdn.vox-cdn.com/thumbor/ZUSSl5rZPA9vhaXfDMMC27oR6Cg=/158x0:1778x1080/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/46114374/7239_0229_GHLive_Stage1.0.0.jpg" alt="asset1"></img>
                    <img className="coolImages" src="https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/Reunion%20Tour%3A%20The%20Best%20And%20Worst%20Of%20Guitar%20Hero/Gh3_2D00_337_2D00_610.jpg" alt="guitarhero2"></img>
                </div>
            </div>
        </body>
    );
}

export default GameDesc;

