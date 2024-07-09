import React, { useEffect, useRef } from 'react';
import big from '../assets/big.svg';
import ss from '../assets/book.png';
import './CryptoDictionary.css';

function CryptoDictionary() {
  const buttonsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonsRef.current) {
        const buttons = buttonsRef.current;
        const rect = buttons.getBoundingClientRect();
        if (rect.top < window.innerHeight - rect.height) {
          buttons.classList.add('fixed-buttons');
        } else {
          buttons.classList.remove('fixed-buttons');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='CryptoDictionary'>
      <hr></hr>
      <div className='heading'>
        <h1 className='heading1'>Crypto Dictionary</h1>
        <h1 className='heading2'>Your one-stop to catch up on all crypto terms</h1>
      </div>
      <div className='center-pic'>
        <img src={big} alt="Crypto Dictionary" className="main-img" />
        <div className="text-overlay">
          <p className='p1'>Web3 + Degen Glossary</p>
          <p className='p2'>Your own crypto dictionary</p>
        </div >
        <img src={ss} alt="Additional" className="overlay-img"/>
      </div>
      <div className='buttons' ref={buttonsRef}>
        <button>Essentials</button>
        <button>Alpha Hub</button>
      </div>
    </div>
  );
}

export default CryptoDictionary;
