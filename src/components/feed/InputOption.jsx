import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color }) {
  return (
    <div className='inputOption'>
      <Icon style={{ color: color }} />

      <h3>{title}</h3>
    </div>
  );
}

export default InputOption;
