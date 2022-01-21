import React from 'react';
import "./styles.css";

const AsideItem = ({logo, text}) => {
  return (
    <li className='asideItem'>
      <a href="/">
      <img src={logo} alt="icon" />
        {text}
      </a>
    </li>
  );
};

export default AsideItem;