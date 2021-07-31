import React, { useRef, useState } from "react";
import './recipeCard.scss';

const RecipeCard = (): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardWrapper = useRef();

  const flip = () => {
    (cardWrapper.current as HTMLElement).classList.toggle('flipped', !isFlipped);
    setIsFlipped(current => !current);
  }

  return (
    <div className="card-wrap" ref={cardWrapper} onClick={flip}>
      <div className="card">
        <div className="card_front">
          Main info
        </div>
        <div className="card_back">
          Ingredients
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;