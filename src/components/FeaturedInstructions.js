import React from 'react';

const FeaturedInstructions = random => {
  return (
    <div>
      <h3>Instructions</h3>
      <h4>
        {random.strArea} {random.strMeal}
      </h4>
      <div>
        <h4>Ingredients</h4>
        <ul>
          <li>
            {random.strMeasure1} {random.strIngredient1}
          </li>
          <li>
            {random.strMeasure2} {random.strIngredient2}
          </li>
          <li>
            {random.strMeasure3} {random.strIngredient3}
          </li>
          <li>
            {random.strMeasure4} {random.strIngredient4}
          </li>
          <li>
            {random.strMeasure5} {random.strIngredient5}
          </li>
        </ul>
        <h4>Directions</h4>
        <p>{random.strInstructions}</p>
      </div>
    </div>
  );
};
export default FeaturedInstructions;
