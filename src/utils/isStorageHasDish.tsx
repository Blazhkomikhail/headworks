import { IRecipeData } from "../shared/interface";

const isStorageHasDish = (dishData: IRecipeData): boolean => { 
  if (!localStorage.getItem('recipes')) return;
  const storageData = JSON.parse(localStorage.getItem('recipes'));
  return storageData.some((recipe: IRecipeData) => recipe.strMeal === dishData.strMeal);
}

export default isStorageHasDish;