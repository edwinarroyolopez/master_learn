import React from 'react';

const Button = ({ handleClick, text, ...props }) => {
  return (
    <div className="button" onClick={handleClick} {...props} >{text}</div>
  );
}
export default Button;
