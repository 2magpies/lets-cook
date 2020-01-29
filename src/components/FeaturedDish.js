import React from 'react';

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
