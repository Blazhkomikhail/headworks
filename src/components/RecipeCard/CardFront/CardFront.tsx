import React, { useEffect, useState } from 'react';
import textPrepare from '../../../utils/textPrepare';
import Button from '../../Button/Button';

interface ICardFrontData {
  name: string;
  area: string;
  instruction: string;
  categoty: string;
  picture: string;
  handleFlip: () => void;
}

const CardFront = ({
  name,
  area,
  instruction,
  categoty,
  picture,
  handleFlip,
}: ICardFrontData): JSX.Element => {
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);

  const handleTextStateChange = (textState: boolean) => {
    setIsTextCutted(textState);
  };

  useEffect(() => {
    setInstructionText(textPrepare(instruction, handleTextStateChange));
  }, [instruction]);

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setInstructionText(instruction);
      setIsTextOpened(true);
    } else {
      setInstructionText(textPrepare(instruction, handleTextStateChange));
      setIsTextOpened(false);
    }
  };
  const isFavouritesPage = window.location.hash.slice(2) === 'favourites';
  return (
    <div className="card_front">
      <div className="card_meal-info">
        <span className="card_area">{area} cuisine</span>
        <span className="card_category">{categoty}</span>
      </div>
      <div
        className="card_meal-picture"
        style={{
          backgroundImage: `url(${picture || './icons/no-image-icon.png'})`,
        }}
      />
      <div className="card_meal-text">
        <div className="card_meal-main-text">
          <h2 className="card_heading">{name}</h2>
          <p className="card_instructions">{instructionText}</p>
          {isTextCutted && (
            <span
              role="presentation"
              className="card_more-less-text"
              onClick={instructionTextHandler}
              onKeyDown={instructionTextHandler}
            >
              {isTextOpened ? 'Less' : 'More'}
            </span>
          )}
        </div>
        {!isFavouritesPage && (
          <Button
            classList="card_flip-btn"
            text="Ingredients"
            handler={handleFlip}
          />
        )}
      </div>
    </div>
  );
};

export default CardFront;
