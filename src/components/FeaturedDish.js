import React from 'react';

//FUTURE: use: refactor instructions so that 1) I can reuse it for other features; 2) clean up App.js to be more elegant
const FeaturedDish = random => {
  return (
    <div>
      <h4>Featured Dish</h4>
      <img src={random.strMealThumb} alt={random.strMeal} width="200" />
      <h3>
        {random.strArea} {random.strMeal}
      </h3>
      <p>{random.strCategory}</p>
    </div>
  );
};

export default FeaturedDish;
