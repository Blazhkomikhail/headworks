import React, { useEffect, useRef, useState } from "react";
import type { TCardProps } from '../../shared/shared';
import textPrepare from '../../utils/textPrepare';
import './recipeCard.scss';

const RecipeCard = (props: TCardProps): JSX.Element => {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);
  const cardWrapper = useRef();

  const { 
    strMeal,
    strInstructions,
    strArea, 
    strCategory,
    strMealThumb,
    strYoutube
  } = props.recipe;

  useEffect(() => {
    if(!isTextOpened) {
      setInstructionText(textPrepare(strInstructions, setIsTextCutted))
    }
  });

  console.log(
    strYoutube
  )

  // const flip = () => {
  //   (cardWrapper.current as HTMLElement).classList.toggle('flipped', !isFlipped);
  //   setIsFlipped(current => !current);
  // }

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setIsTextOpened(true);
      setInstructionText(strInstructions);
    } else {
      setInstructionText(textPrepare(strInstructions, setIsTextCutted));
      setIsTextOpened(false);
    }
  }

  return (
    <div className="card-wrap" ref={cardWrapper}>
      <div className="card">
        <div className="card_front">
          <div 
            className="card_meal-picture"
            style={{ backgroundImage: `url(${strMealThumb})` }}
          />
          <div className="card_meal-text">
            <div className="card_meal-info">
              <span className="card_area">{strArea} cuisine</span>
              <span className="card_category">{strCategory}</span>
            </div>
            <div className="card_meal-main-text">
              <h2 className="card_heading">{strMeal}</h2>
              <p className="card_instructions">{instructionText}</p>
              {isTextCutted ? 
              <span 
                className="card_more-less-text"
                onClick={instructionTextHandler}
              >
                {isTextOpened ? 'Less' : 'More'}
              </span> : ''}
            </div>
          </div>
        </div>
        <div className="card_back">
          Ingredients
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;