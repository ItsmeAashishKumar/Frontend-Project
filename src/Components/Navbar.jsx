import React, { useEffect, useState } from 'react';
import tv from '../assets/nav-tv.svg';
import './Navbar.css';
import intract from '../assets/intract_text.svg';
import ham from '../assets/hamburger.webp'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (

    <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='nav-screen'>
      <div className='Nav-ele'>
        <div className='Nav-ele1'>
          <img src={intract} alt="intract logo" />
        </div>
        <div className='Nav-ele2'>
          <h1>Compass</h1>
          <h1>Explore</h1>
          <h1 className='academy'>Academy</h1>
          <h1>NFTs</h1>
          <h1>ForProjects</h1>
        </div>
        <div className='Nav-ele3'>
          <input placeholder='Search for ecosystems, trending quests etc,.' />
        </div>
        <div className='Nav-ele4'>
          <div className='img-back'>
            <img src={tv} width="20px" alt="tv icon" />
          </div>
          <button className='btn'>Sign In</button>
          <div className='hamburger'>
            <img src={ham} width='30px'/>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Navbar;
