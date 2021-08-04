import { IRecipeData } from "../shared/interface";

const updateStorageData = (
  {strMeal, strInstructions, strArea, strCategory, strMealThumb}: IRecipeData) => {
  
  const dishData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  }; 
  
  const storageData = JSON.parse(localStorage.getItem('recipes'));
  storageData.push(dishData);

  localStorage.setItem('recipes', JSON.stringify(storageData));
}

export default updateStorageData;