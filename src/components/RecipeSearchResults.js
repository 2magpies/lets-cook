import React from 'react';

const RecipeSearchResults = ({ meals }) => {
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
          <div>
            <ul>
              <li>
                {recipe.strMeasure1} {recipe.strIngredient1}
              </li>
              <li>
                {recipe.strMeasure2} {recipe.strIngredient2}
              </li>
              <li>
                {recipe.strMeasure3} {recipe.strIngredient3}
              </li>
              <li>
                {recipe.strMeasure4} {recipe.strIngredient4}
              </li>
              <li>
                {recipe.strMeasure5} {recipe.strIngredient5}
              </li>
            </ul>
            <p className="instructions">{recipe.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeSearchResults;
