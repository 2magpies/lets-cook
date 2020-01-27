import React from 'react';

const Ingredients = ({ ingredients }) => {
  // return early if there are no ingredients
  if (!ingredients.length) {
    return <h2>No Ingredients Found!</h2>;
  }
  console.log(ingredients);

  return (
    <div className="ingredients">
      {ingredients.map(ingredient => (
        <div key={ingredient.idMeal} className="ingredientList">
          <ul>
            {ingredient.strIngredient1}
            {ingredient.strIngredient1}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
