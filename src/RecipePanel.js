import React from 'react';

const RecipePanel = ({ meals }) => {
  // return early if there are no meals
  if (!meals.length) {
    return <h2>No meals Found!</h2>;
  }

  return (
    <div className="gallery">
      {meals.map(recipe => (
        <div key={recipe.idMeal} className="tbd">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
        </div>
      ))}
    </div>
  );
};

export default RecipePanel;
