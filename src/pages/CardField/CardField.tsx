import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import getRecepieData from '../../Api/Api';
import { IRecipeData } from '../../shared/interface';
import MainButtons from '../../components/MainButtons/MainButtons';
import './cardField.scss';

const CardField = (): JSX.Element => {
  const [recipeData, setRecipeData] = useState<IRecipeData>({} as IRecipeData);

  const getCardData = () => {
    try {
      getRecepieData().then((data) => {
        return setRecipeData(data.meals[0]);
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <main className="card-field">
      <RecipeCard recipe={recipeData} />
      <MainButtons handleSkip={getCardData} recipe={recipeData} />
    </main>
  );
};

export default CardField;
