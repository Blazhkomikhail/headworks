import React, { useState, useContext } from "react";
import { IRecipeData } from "../../shared/shared";
import createStorageData from "../../utils/createStorageData";
import updateStorageData from "../../utils/updateStorageData";
import Button from "../Button/Button";
import { RecipeContext } from "../../shared/RecipeProvider";
import './mainButton.scss';
import isStorageHasDish from "../../utils/isStorageHasDish";

interface IMainButtonsProps {
  skipHandler: () => void;
  recipe: IRecipeData;
}

const MainButtons = ({skipHandler, recipe}: IMainButtonsProps) => {
  const [isDishRepeat, setIsDishRepeat] = useState(false);
  const [isDishNew, setIsDishNew] = useState(false);
  const [recipes, setRecipes] = useContext(RecipeContext);

  const handleDishRepeat = () => {
    setIsDishRepeat(true);
    setTimeout(() => {
      setIsDishRepeat(false);
    }, 2500);
  }

  const handleNewDish = () => {
    setIsDishNew(true);
    setTimeout(() => {
      setIsDishNew(false);
    }, 2500);
  }

  console.log(recipes);
  
  const handleLikeClick = () => {

    if (isStorageHasDish(recipe)) {
      handleDishRepeat();
      return;
    }

    if (localStorage.getItem('recipes')) {
      updateStorageData(recipe);
      handleNewDish();
    } else {
      createStorageData(recipe);
      handleNewDish();
    }
    setRecipes((prevRecipes: Array<IRecipeData>) => [...prevRecipes, recipe])
  }

  const buttonText = isDishRepeat ? 'Already in your favourite' : 'Adding to favourites...';

  return (
    <div className="buttons-wrapper">
      <Button 
        classList={'skip-button'}
        text={'Skip'}
        handler={skipHandler}
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