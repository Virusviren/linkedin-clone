import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import IconSvg from '../header/img&icons/linkedin.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={IconSvg} alt='icon' />

        <div className='header__search'>
          {/* Search Icon */}
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://i.ibb.co/ZdzdX7L/IMG-8949.jpg'
          title='Me'
        />
      </div>
    </div>
  );
}

export default Header;
