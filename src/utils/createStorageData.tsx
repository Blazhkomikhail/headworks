import { IRecipeData } from '../shared/interface';

const createStorageData = ({
  strMeal,
  strInstructions,
  strArea,
  strCategory,
  strMealThumb,
}: IRecipeData): void => {
  const mealData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb,
  };
  const recipeStore = new Array(mealData);
  localStorage.setItem('recipes', JSON.stringify(recipeStore));
};

export default createStorageData;
