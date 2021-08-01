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

  const hasMealHandler = () => {
    setIsMealRepeat(true);
    setTimeout(() => {
      setIsMealRepeat(false);
    }, 2500);
  }

  const likeHandler = () => {
    if (!localStorage.getItem('recipes')) {
      createStorageData(recipe);
    } else {
      updateStorageData(recipe, hasMealHandler);
    }
  }

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
          !isMealRepeat ? 
          'Like' : 'Already in your favourite'
        } 
      </button>
    </div>
  )
}

export default MainButtons;