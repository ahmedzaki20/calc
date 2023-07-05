import React from 'react';
import './clear.css';
function Clear({ children, handleClear }) {
  return (
    <div
      className='clear-btn'
      onClick={() => {
        handleClear();
      }}>
      {children}
    </div>
  );
}

export default Clear;
