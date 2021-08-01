import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AddRecipeModal from "../AddRecipeModal/AddRecipeModal";
import Button from "../Button/Button";
import './header.scss';

const body = document.querySelector('body');

const Header = () => {
  const [isRandomButtonActive, setIsRandomButtonActive] = useState(true);
  const [isFavouriteButtonActive, setIsFavouriteButtonActive] = useState(false);
  const [isModalShowed, setIsModalShowed] = useState(false);
  
  const activateRandomButton = () => {
    setIsFavouriteButtonActive(false);
    setIsRandomButtonActive(true);
  }

  const activateFavouriteButton = () => {
    setIsFavouriteButtonActive(true);
    setIsRandomButtonActive(false);
  }

  const isFavouritesPage = window.location.hash.slice(2) === 'favourites';
  const showModalHandler = () => { 
    setIsModalShowed(true);
    body.classList.add('stop-scrolling');
  }
  const destroyModalHandler = () => {
    setIsModalShowed(false);
    body.classList.remove('stop-scrolling');
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

      { isFavouritesPage ?
        <Button 
          classList={'header_add-dish-button'}
          text={'Add custom dish'}
          handler={showModalHandler}
        /> : ''
      }
      {isModalShowed ? <AddRecipeModal destroyHandler={destroyModalHandler}/> : ''}
    </header>
  )
}

export default Header;