import React from 'react';

// Hou comment: I can see that for a few components like the one below, the fat arrow convention is being used whereas other components use the function declaration style (i.e., function App() {}). Can you pick one convention and make sure it's consistent throughout your app?
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
