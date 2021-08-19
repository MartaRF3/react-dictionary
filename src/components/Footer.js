import React from 'react';

let Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul>
          <li className="footer__icon">
            <p className="footer__info">Another cool project by Marta Fincias</p>
            <a href="https://react-mawa.netlify.app" target="_blank" rel="noreferrer">
              <p>🪁</p>
            </a>
          </li>
          <li className="footer__icon">
            <p className="footer__info">Have a look at the Github repo</p>
            <a href="https://github.com/MartaRF3/react-dictionary" target="_blank" rel="noreferrer">
              <p>🎃</p>
            </a>
          </li>
          <li className="footer__icon">
          <p className="footer__info">A bit about me</p>
            <a href="https://martas-portfolio.netlify.app" target="_blank" rel="noreferrer">
              <p>🍭</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
