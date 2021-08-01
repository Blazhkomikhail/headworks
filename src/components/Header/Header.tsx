import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [isRandomButtonActive, setIsRandomButtonActive] = useState(true);
  const [isFavouriteButtonActive, setIsFavouriteButtonActive] = useState(false);

  const activateRandomButton = () => {
    setIsFavouriteButtonActive(false);
    setIsRandomButtonActive(true);
  }

  const activateFavouriteButton = () => {
    setIsFavouriteButtonActive(true);
    setIsRandomButtonActive(false);
  }

  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="header_nav-list">
          <Link to="/" className="header_button">
            <li className={
              `header_nav-item 
              ${isRandomButtonActive ? ' header_nav-item__active' : ''}`}
              onClick={activateRandomButton}
            >
              Random dish
            </li>
          </Link>
          <Link to="/favourites" className="header_button">
            <li className={
              `header_nav-item 
              ${isFavouriteButtonActive ? ' header_nav-item__active' : ''}`}
              onClick={activateFavouriteButton}
            >
              Farvourites
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;