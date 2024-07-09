import React from 'react';
import billi from '../assets/billi.webp';
import reel_video from '../assets/reel-veideo.svg';
import ghoda from '../assets/ghoda.webp';
import bandar from '../assets/bandar.webp';
import frog from '../assets/frog.webp';
import './TopCrypto.css';

function TopCrypto() {
  return (
    <div className='TopCrypto'>
      <hr />
      <div className='headings'>
        <h1 className='heading1'>Top Crypto Creators and Projects to Follow</h1>
        <h1 className='heading2'>Answers to your crypto doubts, straight from the experts</h1>
      </div>
      <div className='cardSection'>
        <div className='img-cont'>
          <img src={billi} alt="Billi" />
          <p className='img-p'>How to plan your retirement with crypto?</p>
          <div className="play-video">
            <img src={reel_video} alt="Play Video" />
          </div>
        </div>
        <div className='img-cont'>
          <img src={frog} alt="Frog" />
          <p className='img-p'>Why are there limited Bitcoin?</p>
          <div className="play-video">
            <img src={reel_video} alt="Play Video" />
          </div>
        </div>
        <div className='img-cont'>
          <img src={ghoda} alt="Ghoda" />
          <p className='img-p'>How does Uniswap actually work?</p>
          <div className="play-video">
            <img src={reel_video} alt="Play Video" />
          </div>
        </div>
        <div className='img-cont'>
          <img src={bandar} alt="Bandar" />
          <p className='img-p'>How to spot crypto projects to invest in?</p>
          <div className="play-video">
            <img src={reel_video} alt="Play Video" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCrypto;
