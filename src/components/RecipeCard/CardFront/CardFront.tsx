import React, { useEffect, useState } from "react";
import textPrepare from "../../../utils/textPrepare";
import Button from "../../Button/Button";

interface ICardFrontData {
  name: string;
  area: string;
  instruction: string;
  categoty: string;
  picture: string;
  handleFlip: ()=> void
}

const CardFront = ({name, area, instruction, categoty, picture, handleFlip}: ICardFrontData) => {
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);

  const handleTextStateChange = (textState: boolean) => {
    setIsTextCutted(textState);
  }

  useEffect(() => {
    if (!isTextOpened) {
      setInstructionText(textPrepare(instruction, handleTextStateChange))
    }
  });

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setInstructionText(instruction);
      setIsTextOpened(true);
    } else {
      setInstructionText(textPrepare(instruction, handleTextStateChange));
      setIsTextOpened(false);
    }
  }
  
  return (
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
        <Button 
          classList={'card_ingredients-btn'}
          text={'Ingredients'}
          handler={handleFlip}
        />      
      </div>
    </div>
  )
}

export default CardFront;