import React from "react";
import { ICardData } from "../../shared/shared";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import './favourites.scss';

const Favourites = () => {

  const storageRecipes = JSON.parse(localStorage.getItem('recipes'));
  let recipeCards = [];
  if (storageRecipes) {
    recipeCards = storageRecipes.map((recipe: ICardData, i: number) => (
      <RecipeCard 
        name={recipe.strMeal} 
        instruction={recipe.strInstructions}
        area={recipe.strArea}
        categoty={recipe.strCategory}
        picture={recipe.strMealThumb}
        key={i}
      /> 
    ));
  }
    
  return (
    <main className="favourites">
      { recipeCards.length ? 
        recipeCards : 
        (<p className="favourite-empty-warning">You have no favourite dishes yet...</p>)
      }
    </main>
  )
}

export default Favourites;