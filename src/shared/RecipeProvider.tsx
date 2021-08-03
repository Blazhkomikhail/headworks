import React, { useState, createContext } from 'react';

export const RecipeContext = createContext([]);

export const RecipeProvider = (props: {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}) => {
  const storageData = JSON.parse(localStorage.getItem('recipes')) || [];

  const [recipes, setRecipes] = useState(storageData);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  )
}