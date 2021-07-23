import React from 'react';

// For some reason this doesn't work...
// import logo from '../assets/images/rosa.png';

let Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="0#" className="header__title">
          <img src="{logo}" alt="Logo" className="header__logo" />
          <h1>Marta's Dictionary</h1>
        </a>
      </div>
    </header>
  )
}

export default Header;
