import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__Header'>
        <Avatar alt={name} src={photoUrl} />
        <div className='post__Info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__Body'>
        <p>{message}</p>
      </div>
      <div className='post__Buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
}

export default Post;
