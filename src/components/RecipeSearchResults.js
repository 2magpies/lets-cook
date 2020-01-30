import React from 'react';

//FUTURE: use: refactor to align in look and feel with NextFeature; dependencies: refactor RecipeSearchResults refactoring

const RecipeSearchResults = ({ meals }) => {
  // return early if there are no meals
  if (!meals.length) {
    return <h2>Look up another recipe!</h2>;
  }

  return (
    <div className="child">
      {meals.map(recipe => (
        <div key={recipe.idMeal} className="thumb">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
          <h4>
            {recipe.strArea} {recipe.strMeal}
          </h4>
          {/* future: reuse Ingredients.js functionality here */}
          <p className="instructions">{recipe.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeSearchResults;
