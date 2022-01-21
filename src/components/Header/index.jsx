import React from 'react';
import logo from '../../assets/tribal-logo.png';
import arrow from '../../assets/arrow.svg';
import "./styles.css";


const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={logo} alt="tribal" />
      </a>
      <button className="header__profile">
        <p>HB</p>
        <img src={arrow} alt="tribal" />
      </button>
    </header>
  );
};

export default Header;