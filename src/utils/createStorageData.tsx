import { ICardData } from "../shared/shared";

const createStorageData = ({strMeal, strInstructions, strArea, strCategory, strMealThumb}: ICardData) => {
  const mealData = {
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb
  };
    
  const recipeStore = new Array(mealData);
  
  localStorage.setItem('recipes', JSON.stringify(recipeStore));
}

export default createStorageData;