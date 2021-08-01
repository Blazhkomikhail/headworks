export interface ICardData {
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  [key: string] : string;
}

export type TCardProps = {
  recipe: ICardData;
}