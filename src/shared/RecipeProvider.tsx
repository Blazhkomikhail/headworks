import React, { useState, createContext } from 'react';
import { IRecipeData } from './interface';

export const RecipeContext = createContext([]);

export const RecipeProvider = ({
  children,
}: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
}) => {
  const storageData = JSON.parse(localStorage.getItem('recipes')) || [];

  const [recipes, setRecipes] = useState(storageData);

  const handleSetRecipes = (recipe: IRecipeData) => {
    setRecipes((prevRecipes: Array<IRecipeData>) => [...prevRecipes, recipe]);
  };
  return (
    <RecipeContext.Provider value={[recipes, handleSetRecipes]}>
      {children}
    </RecipeContext.Provider>
  );
};
