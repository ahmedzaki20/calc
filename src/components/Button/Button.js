import React from 'react';
import './button.css';

const isOperator = val => {
  return !isNaN(val) || val === '.' || val === '=';
};
function Button({ children, addToInput }) {
  return (
    <div
      className={`button-wrapper ${isOperator(children) ? null : 'operator'}`}
      onClick={() => {
        addToInput(children);
        console.log(children);
      }}>
      {children}
    </div>
  );
}

export default Button;
