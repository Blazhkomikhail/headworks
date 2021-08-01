import { ICardData } from "../shared/shared";

const updateStorageData = (
  {strMeal, strInstructions, strArea, strCategory, strMealThumb}: ICardData,
  newMealHeandler: () => void,
  repeatMealHeandler: () => void ) => {
  const mealData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  }; 
  const storageData = JSON.parse(localStorage.getItem('recipes'));
  const isStorageHasMeal = storageData.some((recipe: ICardData) => recipe.strMeal === mealData.strMeal);
  
  if (!isStorageHasMeal) {
    newMealHeandler();
    storageData.push(mealData);
  } else {
    repeatMealHeandler();
  }

  localStorage.setItem('recipes', JSON.stringify(storageData));
}

export default updateStorageData;