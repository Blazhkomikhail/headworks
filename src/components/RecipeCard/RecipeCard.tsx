import React, { useRef, useState } from "react";
import { ICardProp } from "../../shared/shared";
import CardBack from "./CardBack/CardBack";
import CardFront from "./CardFront/CardFront";
import './recipeCard.scss';


const RecipeCard = ({recipe}: ICardProp): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardWrapper = useRef();

  const flipHandler = () => {
    (cardWrapper.current as HTMLElement).classList.toggle('flipped', !isFlipped);
    setIsFlipped(current => !current);
  }

  return (
    <div className="card-wrap" ref={cardWrapper}>
      <div className="card">
        <CardFront 
          name={recipe.strMeal}
          area={recipe.strArea}
          instruction={recipe.strInstructions}
          categoty={recipe.strCategory}
          picture={recipe.strMealThumb}
          handleFlip={flipHandler}
        />
        <CardBack recipeData={recipe}/>
      </div>
    </div>
  )
}

export default RecipeCard;