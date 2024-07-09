import React from 'react';
import home from '../assets/home.png';
import './Home.css';
import logo from '../assets/logo.gif';
import arrow from '../assets/arrow.svg';

function Home() {
  return (
    <div className='Home'>
      <div className='home-section'>
        <div className='img-container'>
          <img src={home} alt='home-img' />
          <div className='overlay'>
            <img src={logo} alt='logo' className='logo' width="200px" />
            <div className='center-text'>
              <h1>Intract users <span>have together made more than</span> $100 million<span> in web3.</span>
              </h1>
              <h1><span>Join them and</span> learn how to earn crypto!</h1>
            </div>
            <div className='Button'>
              <button>
                <div className='button-content'>
                  Get Started
                  <img src={arrow} alt='arrow' className='arrow' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
