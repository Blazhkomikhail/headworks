import React  from 'react';
import { IRecipeData } from '../../../shared/shared';
import Button from '../../Button/Button';
import IngredientsTable from '../IngredientsTable/IngredientsTable';

interface ICardBackData {
  recipeData: IRecipeData;
  flipHandler: () => void;
}

const CardBack = ({recipeData, flipHandler}: ICardBackData) => {
  return (
    <div className="card_back">
      <h2 className="card_heading">{recipeData.strMeal}</h2>
      <IngredientsTable recipe={recipeData}/>

      <Button 
          classList={'card_flip-btn card_flip-btn__back'}
          text={'Back'}
          handler={flipHandler}
        />      
    </div>
  )
}

export default CardBack;
