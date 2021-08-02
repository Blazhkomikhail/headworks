import React from "react";
import { ICardProp } from "../../../shared/shared";


const IngredientsTable = ({recipe}: ICardProp): JSX.Element => {
  if (!recipe) return;
  const rows = [];
  const maxIngredientCount = 20;

  for (let i = 1; i <= maxIngredientCount; i += 1) {
    if (recipe[`strIngredient${i}`]) {
      const row = 
        <tr key={i}>
          <td>{recipe[`strIngredient${i}`]}</td>
          <td>{recipe[`strMeasure${i}`]}</td>
        </tr>
      rows.push(row);
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default IngredientsTable;