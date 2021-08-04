import React, { useState, useContext } from "react";
import createStorageData from "../../utils/createStorageData";
import updateStorageData from "../../utils/updateStorageData";
import { RecipeContext } from "../../shared/RecipeProvider";
import isStorageHasDish from "../../utils/isStorageHasDish";
import { IRecipeData } from "../../shared/interface";
import Button from "../Button/Button";
import './mainButton.scss';

const UPDATE_TEXT_DELAY = 1500;

interface IMainButtonsProps {
  handleSkip: () => void;
  recipe: IRecipeData;
}

const MainButtons = ({handleSkip, recipe}: IMainButtonsProps) => {
  const [isDishRepeat, setIsDishRepeat] = useState(false);
  const [isDishNew, setIsDishNew] = useState(false);
  const [recipes, setRecipes] = useContext(RecipeContext);
  
  const handleDishRepeat = () => {
    setIsDishRepeat(true);
    setTimeout(() => {
      setIsDishRepeat(false);
    }, UPDATE_TEXT_DELAY);
  }

  const handleNewDish = () => {
    setIsDishNew(true);
    setTimeout(() => {
      setIsDishNew(false);
    }, UPDATE_TEXT_DELAY);
  }
  
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
    setRecipes((prevRecipes: Array<IRecipeData>) => [...prevRecipes, recipe])
  }

  const buttonText = isDishRepeat ? 'Already in your favourites' : 'Adding to favourites...';

  return (
    <div className="buttons-wrapper">
      <Button 
        classList={'skip-button'}
        text={'Skip'}
        handler={handleSkip}
      />
      <Button 
        classList={'like-button'}
        text={!isDishRepeat && !isDishNew ?
          'Like' : buttonText}
        handler={handleLikeClick}
      />
    </div>
  )
}

export default MainButtons;