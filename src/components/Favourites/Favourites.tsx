import React from "react";
import { ICardData } from "../../shared/shared";
import RecipeCard from "../RecipeCard/RecipeCard";
import './favourites.scss';

const Favourites = () => {

  const storageRecipes = JSON.parse(localStorage.getItem('recipes'));
  const recipeCards = storageRecipes.map((recipe: ICardData, i: number) => (
    <RecipeCard recipe={recipe} key={i}/> 
  ))

  return (
    <main className="favourites">
      {recipeCards}
    </main>
  )
}

export default Favourites;
