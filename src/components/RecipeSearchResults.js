import React from 'react';
import Ingredients from './Ingredients';

//FUTURE: use: refactor to align in look and feel with NextFeature; dependencies: refactor RecipeSearchResults refactoring

const RecipeSearchResults = ({ meals }) => {
  // return early if there are no meals
  if (!meals.length) {
    return <h2>Look up another recipe!</h2>;
  }

  return (
    <div className="child">
      {meals.map(recipe => (
        <section key={recipe.idMeal} className="">
          <h4>
            {recipe.strArea} {recipe.strMeal}
          </h4>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
          <p>{recipe.strCategory}</p>
          <Ingredients recipe={recipe} />
          <p className="instructions">{recipe.strInstructions}</p>
        </section>
      ))}
    </div>
  );
};
export default RecipeSearchResults;
