export interface IRecipeData {
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  [key: string]: string;
}

export interface ICardProp {
  recipe: IRecipeData;
}
