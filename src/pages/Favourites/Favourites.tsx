import React, { useContext } from 'react';
import { IRecipeData } from '../../shared/interface';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { RecipesContext } from '../../shared/RecipeProvider';
import generateKey from '../../utils/generateKey';
import './favourites.scss';

const Favourites = (): JSX.Element => {
  const [recipes] = useContext(RecipesContext);

  let recipeCards = [];
  if (recipes) {
    recipeCards = recipes.map((recipe: IRecipeData) => (
      <RecipeCard recipe={recipe} key={generateKey(recipe.strArea)} />

    ));
  }

  return (
    <main className="favourites">
      {recipeCards.length ? (
        recipeCards
      ) : (
        <p className="favourite-empty-warning">
          You have no favourite dishes yet...
        </p>
      )}
    </main>
  );
};

export default Favourites;
