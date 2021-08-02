import React  from 'react';
import { IRecipeData } from '../../../shared/shared';
import IngredientsTable from '../IngredientsTable/IngredientsTable';

interface ICardBackData {
  recipeData: IRecipeData
}

const CardBack = ({recipeData}: ICardBackData) => {
  return (
    <div className="card_back">
      <h2 className="card_heading">{recipeData.strMeal}</h2>
      <IngredientsTable recipe={recipeData}/>
    </div>
  )
}

export default CardBack;
