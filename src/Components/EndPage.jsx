import React from 'react'
import './EndPage.css'
import intract from '../assets/intract_text.svg'
import twitter from '../assets/twitter.png'
import spotify from '../assets/spotify.png'
import telegram from '../assets/telegram.webp'
import  discord from '../assets/discord.svg'
function EndPage() {
  return (
    <div className='EndPage'>
        <hr></hr>
        <div className='EndPage-ele'>
            <div className='left-ele'>
                <img src={intract} className='left-img'></img>
                <p className='left-p'>
                    We are your personal guide for exploring web3 projects & earning 100x rewards
                </p>
            </div>
            <div className='right-ele'>
                <div className='intract-heading'>
                    <h1 className='main'>INTRACT</h1>
                    <h1  className='intract'>Explore Quests</h1>
                    <h1  className='intract'>Comunities</h1>
                    <h1  className='intract'>Alpha Hub</h1>
                </div>
                <div className='earn-heading'>
                    <h1 className='main'>EARN</h1>
                    <h1 className='earn'>Refer & Earn</h1>
                    <h1 className='earn'>Leaderboard</h1>
                    <h1 className='earn'>Achievements</h1>
                </div>
                <div className='about-heading'>
                    <h1 className='main'>ABOUT</h1>
                    <h1 className='about'>Product Roadmap</h1>
                    <h1 className='about'>Affiliate Program</h1>
                    <h1 className='about'>Sign up Program</h1>
                    <h1 className='about'>Growth Community</h1>
                    <h1 className='about'>Blogs</h1>
                </div>
                <div className='support-heading'>
                    <h1 className='main'>SUPPORT</h1>
                    <h1 className='support'>Help Center</h1>
                    <h1 className='support'>Create your quest</h1>
                    <h1 className='support'>Terms of Service</h1>
                    <h1 className='support'>Privacy Policy</h1>
                    <h1 className='support'>Community Guidelines</h1>
                </div>
            </div>
        </div>
        <hr className='line'></hr>
        <div className='para'>
            <p><span className='disc'>Disclaimer:</span> 
            <span className='rest'> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. 
                There may be no regulatory recourse for any loss from such transactions. We advise the viewer to 
                proceed with caution. Nothing in this website or any communication published by us amounts to, is
                 intended to be, or should be construed as investment or purchase advice of any kind or financial
                  advice or promotion under any applicable laws. Any decision made based on the content provided 
                  on this website or any communication published by us shall not be attributable to us.</span></p>
        </div>
        <hr className='line'></hr>
        <div className='end-ele'>
            <p>CREATED BY <a href="#">INTRACT</a></p>
            <div className='icons'>
                <div className='logo-con'><img src={twitter} alt="twitter" /></div>
                <div className='logo-con'>  <img src={discord} alt="discord" /></div>
                <div className='logo-con'>
                <img src={telegram} alt="telegram" /></div>
                <div className='logo-con'> <img src={spotify} alt="spotify" /></div>
                
              
               
            </div>
        </div>
    </div>
  )
}

export default EndPage
