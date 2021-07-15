import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://miro.medium.com/max/1400/0*9HT-cCMaBZZZtbi8' alt='' />
        <Avatar
          className='side__avatar'
          src='https://i.ibb.co/ZdzdX7L/IMG-8949.jpg'
        />
        <h2>Viren Patil </h2>
        <h4>virenpatil1@outlook.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>101</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2443</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Javascript')}
        {recentItem('Frontend')}
        {recentItem('Desgin')}
      </div>
    </div>
  );
}

export default Sidebar;
