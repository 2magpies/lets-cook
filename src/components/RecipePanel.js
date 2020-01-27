import React from 'react';

const RecipePanel = ({ meals }) => {
  // return early if there are no meals
  if (!meals.length) {
    return <h2>No Recipes Found!</h2>;
  }
  console.log(meals);

  return (
    <div className="gallery">
      {meals.map(recipe => (
        <div key={recipe.idMeal} className="thumb">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width="300"
            caption={recipe.strMeal}
          />
          <h4>
            {recipe.strArea} {recipe.strMeal}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default RecipePanel;
