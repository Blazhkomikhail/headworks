import { IRecipeData } from "../shared/shared";

const updateStorageData = (
  {strMeal, strInstructions, strArea, strCategory, strMealThumb}: IRecipeData,
  newMealHeandler: () => void,
  repeatMealHeandler: () => void ) => {
  const dishData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  }; 
  const storageData = JSON.parse(localStorage.getItem('recipes'));
  const isStorageHasDish = storageData.some((recipe: IRecipeData) => recipe.strMeal === dishData.strMeal);
  
  if (!isStorageHasDish) {
    newMealHeandler();
    storageData.push(dishData);
  } else {
    repeatMealHeandler();
  }

  localStorage.setItem('recipes', JSON.stringify(storageData));
}

export default updateStorageData;