import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          VIK
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                ABOUT
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                SKILLS
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                SERVICES
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                WORK
              </a>
            </li>
            <li className="nav__item">
              <a href="#findme" className="nav__link">
                FIND ME
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
