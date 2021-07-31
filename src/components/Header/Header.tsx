import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="header_nav-list">
          <li className="header_nav-item">
            Random dish
          </li>
          <li className="header_nav-item">
            Farvourites
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;