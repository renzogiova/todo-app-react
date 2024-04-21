import React from 'react';
import ButtonStyle from './Button.module.css';

const Button = (props) => {
  const { text, handleClick, darkMode} = props;
  return (
    <div onClick={handleClick} className={`${ButtonStyle.button} ${!darkMode ? ButtonStyle.button_light : ButtonStyle.button_dark}`}>
      {text}
    </div>
  )
}

export default Button