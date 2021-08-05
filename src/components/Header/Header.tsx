import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { RecipesContext } from '../../shared/RecipeProvider';
import AddRecipeModal from '../AddRecipeModal/AddRecipeModal';
import './header.scss';

const body = document.querySelector('body');

const Header = (): JSX.Element => {
  const [isRandomButtonActive, setIsRandomButtonActive] = useState(false);
  const [isFavouriteButtonActive, setIsFavouriteButtonActive] = useState(false);
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [recipes] = useContext(RecipesContext);
  const isFavouritesPage = window.location.hash.slice(2) === 'favourites';

  const activateRandomButton = () => {
    setIsFavouriteButtonActive(false);
    setIsRandomButtonActive(true);
  };

  const activateFavouriteButton = () => {
    setIsFavouriteButtonActive(true);
    setIsRandomButtonActive(false);
  };

  useEffect(() => {
    if (isFavouritesPage) {
      activateFavouriteButton();
    } else {
      activateRandomButton();
    }
  }, [isFavouritesPage]);

  const handleShowModal = () => {
    setIsModalShowed(true);
    body.classList.add('stop-scrolling');
  };
  const handleDestroyModal = () => {
    setIsModalShowed(false);
    body.classList.remove('stop-scrolling');
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav className="header_nav">
          <ul className="header_nav-list">
            <Link to="/" className="header_link">
              <li
                role="presentation"
                className={`header_nav-item${
                  isRandomButtonActive ? ' header_nav-item__active' : ''
                }`}
                onClick={activateRandomButton}
                onKeyDown={activateRandomButton}
              >
                Random dish
              </li>
            </Link>

            <Link to="/favourites" className="header_link">
              <li
                role="presentation"
                className={`header_nav-item${
                  isFavouriteButtonActive ? ' header_nav-item__active' : ''
                }`}
                onClick={activateFavouriteButton}
                onKeyDown={activateFavouriteButton}
              >
                Farvourites: {recipes.length}
              </li>
            </Link>
          </ul>
        </nav>

        {isFavouritesPage && (
          <Button
            classList="header_add-dish-button"
            text="Add custom dish"
            handler={handleShowModal}
          />
        )}
        {isModalShowed && (
          <AddRecipeModal handleDestroyModal={handleDestroyModal} />
        )}
      </div>
    </header>
  );
};

export default Header;
