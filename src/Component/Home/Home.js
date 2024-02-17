import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.trunk.min';
import './Home.css';
import home from './logo_article.png';
import homeinfo from './website1.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return( 
  <div className='home' >
      <Navbar/>

      <div className="content-container">
        <div className="left-content">
          <div className='card-1'>
            
            <div className='card-1-css'>
            <div className='card-1-update'>Updates</div>
            Addition chatbot for more info →
            </div>
            
          </div>
          <div className='title-1' >
            <p>Ease your mind on articles operations.</p>
            
          </div>
          <div className='desc-1'>
            <p>Navigate the world of news effortlessly with our website that transforms articles into concise, insightful summaries. Stay informed, save time, and discover the essence of each story. </p>
          </div>
          <div className='explore' onClick={() => navigate('/chat')}>
            Explore Now
          </div>
        </div>
        <div className="right-content">
          <img src={homeinfo} alt="Image" />
        </div>
      </div>
  </div>
  )
}

export default Home