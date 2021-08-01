import React, { useEffect, useRef, useState } from "react";
import textPrepare from '../../utils/textPrepare';
import './recipeCard.scss';

interface ICardData {
  name: string;
  instruction: string;
  area: string;
  categoty: string;
  picture: string;
}

const RecipeCard = ({name, instruction, area, categoty, picture}: ICardData): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);
  const cardWrapper = useRef();

  const setTextState = (textState: boolean) => {
    setIsTextCutted(textState);
  }

  useEffect(() => {
    if (!isTextOpened) {
      setInstructionText(textPrepare(instruction, setTextState))
    }
  });

  const flipHandler = () => {
    setInstructionText(textPrepare(instruction, setTextState));
    (cardWrapper.current as HTMLElement).classList.toggle('flipped', !isFlipped);
    setIsFlipped(current => !current);
  }

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setInstructionText(instruction);
      setIsTextOpened(true);
    } else {
      setInstructionText(textPrepare(instruction, setTextState));
      setIsTextOpened(false);
    }
  }

  return (
    <div className="card-wrap" ref={cardWrapper}>
      <div className="card">
        <div className="card_front">
          <div
            className="card_meal-picture"
            style={{backgroundImage: `url(${picture || './icons/no-image-icon.png'})` }}
          />
          <div className="card_meal-text">
            <div className="card_meal-info">
              <span className="card_area">{area} cuisine</span>
              <span className="card_category">{categoty}</span>
            </div>
            <div className="card_meal-main-text">
              <h2 className="card_heading">{name}</h2>
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
          <h2 className="card_heading">{name}</h2>
          <p className="card_instructions">{instruction}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;