import React, { useState } from "react";
import { ICardData } from "../../shared/shared";
import createStorageData from "../../utils/createStorageData";
import updateStorageData from "../../utils/updateStorageData";

interface IMainButtonsProps {
  skipHandler: () => void;
  recipe: ICardData;
}

const MainButtons = ({skipHandler, recipe}: IMainButtonsProps) => {
  const [isMealRepeat, setIsMealRepeat] = useState(false);
  const [isMealNew, setIsMealNew] = useState(false);

  const hasMealHandler = () => {
    setIsMealRepeat(true);
    setTimeout(() => {
      setIsMealRepeat(false);
    }, 2500);
  }

  const newMealHandler = () => {
    setIsMealNew(true);
    setTimeout(() => {
      setIsMealNew(false);
    }, 2500);
  }
  
  const likeHandler = () => {
    if (localStorage.getItem('recipes')) {
      updateStorageData(recipe, newMealHandler, hasMealHandler);
    } else {
      createStorageData(recipe);
    }
  }

  const buttonText = isMealRepeat ? 'Already in your favourite' : 'Adding to favourite...';
  console.log(buttonText);
  return (
    <div className="buttons-wrapper">
      <button 
        className="skip-button"
        onClick={skipHandler}
      >
        Skip
      </button>
      <button 
        className="like-button"
        onClick={likeHandler}
      >
        {
          !isMealRepeat && !isMealNew ?
          'Like' : buttonText
        } 
      </button>
    </div>
  )
}

export default MainButtons;