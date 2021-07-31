export interface ICardData {
  strMeal: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string] : string;
}

export type TCardProps = {
  recipe: ICardData;
}