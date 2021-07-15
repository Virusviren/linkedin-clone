import React from 'react';
import './Headeroption.css';
import Avatar from '@material-ui/core/Avatar';
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headeroption'>
      {Icon && <Icon className='headeroption__icon' />}
      {avatar && <Avatar className='headeroption_icon' src={avatar} />}
      <h3 className='headeroption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
