import React, { useContext } from "react";
import { IRecipeData } from "../../shared/interface";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeContext } from "../../shared/RecipeProvider";
import './favourites.scss';

const Favourites = () => {
  const [recipes] = useContext(RecipeContext);

  let recipeCards = [];
  if (recipes) {
    recipeCards = recipes.map((recipe: IRecipeData, i: number) => (
      <RecipeCard 
        recipe={recipe}
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
