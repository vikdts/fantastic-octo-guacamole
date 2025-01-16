import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">VIK</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="home" className="nav__link">
                            HOME
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="about" className="nav__link">
                            ABOUT
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="skills" className="nav__link">SKILLS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="work" className="nav__link">WORK
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="findme" className="nav__link">FIND ME
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close"></i>

                <div className="nav__toggle">
                    <i className="uil uil-apps"></i>
                </div>
                
            </div>
        </nav>
    </header>
  )
}

export default Header