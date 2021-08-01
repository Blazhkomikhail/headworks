import { ICardData } from "../shared/shared";

const updateStorageData = (
  {strMeal, strInstructions, strArea, strCategory, strMealThumb}: ICardData,
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
  const isStorageHasDish = storageData.some((recipe: ICardData) => recipe.strMeal === dishData.strMeal);
  
  if (!isStorageHasDish) {
    newMealHeandler();
    storageData.push(dishData);
  } else {
    repeatMealHeandler();
  }

  localStorage.setItem('recipes', JSON.stringify(storageData));
}

export default updateStorageData;