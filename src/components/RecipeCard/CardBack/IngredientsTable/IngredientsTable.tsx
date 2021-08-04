import React from 'react';
import { ICardProp } from '../../../../shared/interface';
import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

const IngredientsTable = ({ recipe }: ICardProp): JSX.Element => {
  const rows = [];
  const maxIngredientCount = 14;

  for (let i = 1; i <= maxIngredientCount; i += 1) {
    if (recipe[`strIngredient${i}`]) {
      const row = (
        <tr key={i}>
          <td>{capitalizeFirstLetter(recipe[`strIngredient${i}`])}</td>
          <td>{capitalizeFirstLetter(recipe[`strMeasure${i}`])}</td>
        </tr>
      );
      rows.push(row);
    }
  }
  return (
    <table className="card_back-table">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default IngredientsTable;
