import React, { useState, useEffect } from "react";
import RecipeCard from '../RecipeCard/RecipeCard';
import getRecepieData from '../../Api/Api';
import { ICardData } from '../../shared/shared';
import MainButtons from "../MainButtons/MainButtons";
import './cardField.scss';

const CardField = (): JSX.Element => {
  const [recipeData, setRecipeData] = useState<ICardData>({} as ICardData);

  const getCardData = () => {
    try {
      getRecepieData()
        .then(data => {
          setRecipeData(data.meals[0]);
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCardData();
  }, [])

  console.log(recipeData)

  return (
    <main className="card-field">
      <RecipeCard recipe={recipeData} />
      <MainButtons skipHandler={getCardData} recipe={recipeData}/>
    </main>
  )
}

export default CardField;