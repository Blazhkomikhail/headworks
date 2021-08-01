import React, { useEffect, useRef, useState } from "react";
import type { TCardProps } from '../../shared/shared';
import textPrepare from '../../utils/textPrepare';
import './recipeCard.scss';

const RecipeCard = (props: TCardProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);
  const cardWrapper = useRef();

  const {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  } = props.recipe;

  const setTextState = (textState: boolean) => {
    setIsTextCutted(textState);
  }

  useEffect(() => {
    if (!isTextOpened) {
      setInstructionText(textPrepare(strInstructions, setTextState))
    }
  });

  const flipHandler = () => {
    setInstructionText(textPrepare(strInstructions, setTextState));
    (cardWrapper.current as HTMLElement).classList.toggle('flipped', !isFlipped);
    setIsFlipped(current => !current);
  }

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setInstructionText(strInstructions);
      setIsTextOpened(true);
    } else {
      setInstructionText(textPrepare(strInstructions, setTextState));
      setIsTextOpened(false);
    }
  }

  return (
    <div className="card-wrap" ref={cardWrapper}>
      <div className="card">
        <div className="card_front">
          <div
            className="card_meal-picture"
            style={{backgroundImage: `url(${strMealThumb || './icons/no-image-icon.png'})` }}
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
            { isTextCutted ?
              <button 
              className="card_ingredients-btn" 
              type="button" 
              onClick={flipHandler}
              >
                Ingredients
              </button> : ''
            } 
          </div>
        </div>
        <div className="card_back">
          <h2 className="card_heading">{strMeal}</h2>
          <p className="card_instructions">{strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;