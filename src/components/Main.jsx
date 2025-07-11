import React, { useState } from 'react';
import './Main.css';
import { assets } from '../assets/assets.js';

const Main = () => {
  const [question, setQuestion] = useState("");

  const handleGenerateAnswer = () => {
    alert("You asked: " + question);
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>Neon Chat</p>
        <img src={assets.user_icon} alt="user" className='img' />
      </div>

      <div className="greet">
        <p><span>Hello, Dev</span></p>
        <p>What galaxy shall we explore today?</p>
      </div>

      <div className="cards">
        <div className="card">
          <p>Give me some insane space facts 🚀</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p>Top anime fight scenes 👊</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Make me a cool Valorant crosshair</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>Best coding tips for placements 💻</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>

      <div className="main-bottom">
        <div className="search-box">
          <input
            type="text"
            placeholder="Type your galaxy of thoughts..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" onClick={handleGenerateAnswer} />
          </div>
        </div>
        <p className='bottom-info'>This UI is powered by your imagination ✨</p>
      </div>
    </div>
  );
};

export default Main;
