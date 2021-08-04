import React, { useState, useContext, useEffect } from 'react';
import createStorageData from '../../utils/createStorageData';
import updateStorageData from '../../utils/updateStorageData';
import { RecipeContext } from '../../shared/RecipeProvider';
import isStorageHasDish from '../../utils/isStorageHasDish';
import { IRecipeData } from '../../shared/interface';
import Button from '../Button/Button';
import './mainButton.scss';

const UPDATE_TEXT_DELAY = 1500;

interface IMainButtonsProps {
  handleSkip: () => void;
  recipe: IRecipeData;
}

const MainButtons = ({
  handleSkip,
  recipe,
}: IMainButtonsProps): JSX.Element => {
  const [isDishRepeat, setIsDishRepeat] = useState(false);
  const [isDishNew, setIsDishNew] = useState(false);
  const [recipes, handleSetRecipes] = useContext(RecipeContext);
  let timeOutId: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      clearTimeout(timeOutId);
    };
  },[]);

  const handleDishRepeat = () => {
    setIsDishRepeat(true);
    timeOutId = setTimeout(() => {
      setIsDishRepeat(false);
    }, UPDATE_TEXT_DELAY);
  };

  const handleNewDish = () => {
    setIsDishNew(true);
    timeOutId = setTimeout(() => {
      setIsDishNew(false);
    }, UPDATE_TEXT_DELAY);
  };

  const handleLikeClick = () => {
    if (isStorageHasDish(recipe)) {
      handleDishRepeat();
      return;
    }

    if (localStorage.getItem('recipes')) {
      updateStorageData(recipe);
    } else {
      createStorageData(recipe);
    }

    handleNewDish();
    handleSetRecipes(recipe);
  };

  const buttonText = isDishRepeat
    ? 'Already in your favourites'
    : 'Adding to favourites...';

  return (
    <div className="buttons-wrapper">
      <Button classList="skip-button" text="Skip" handler={handleSkip} />
      <Button
        classList="like-button"
        text={!isDishRepeat && !isDishNew ? 'Like' : buttonText}
        handler={handleLikeClick}
      />
    </div>
  );
};

export default MainButtons;
