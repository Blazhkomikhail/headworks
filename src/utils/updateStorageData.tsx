import { ICardData } from "../shared/shared";

const updateStorageData = (
  {strMeal, strInstructions, strArea, strCategory, strMealThumb}: ICardData,
  mealRepeatHeandler: () => void ) => {
  const mealData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  }; 
  const storageData = JSON.parse(localStorage.getItem('recipes'));
  const isStorageHasMeal = storageData.some((recipe: ICardData) => recipe.strMeal === mealData.strMeal)
  
  if (!isStorageHasMeal) {
    storageData.push(mealData);
  } else {
    mealRepeatHeandler();
  }

  localStorage.setItem('recipes', JSON.stringify(storageData));
}

export default updateStorageData;