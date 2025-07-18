import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../assets/assets.js';

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="Sidebar">
      <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="Menu" />
      <div className='new-chat'>
        <img src={assets.profile_icon} alt="" />  
        {extended && <p>New Chat</p>}
      </div>
      {extended && (
        <div className='recent'>
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is React...</p>
          </div>
        </div>
      )}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
