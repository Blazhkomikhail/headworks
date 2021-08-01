import React, { useState } from "react";
import { ICardData } from "../../shared/shared";
import createStorageData from "../../utils/createStorageData";
import updateStorageData from "../../utils/updateStorageData";
import Button from "../Button/Button";
import './mainButton.scss';

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

  const buttonText = isMealRepeat ? 'Already in your favourite' : 'Adding to favourites...';

  return (
    <div className="buttons-wrapper">
      <Button 
        classList={'skip-button'}
        text={'Skip'}
        handler={skipHandler}
      />
      <Button 
        classList={'like-button'}
        text={!isMealRepeat && !isMealNew ?
          'Like' : buttonText}
        handler={likeHandler}
      />
    </div>
  )
}

export default MainButtons;