import React from 'react';

const FeaturedDish = ({ meals }) => {
  // return early if there are no images
  if (!meals.length) {
    return <h2>No Recipe Found!</h2>;
  }

  return (
    <div className="featured">
      {meals.map(dish => (
        <div key={dish.idMeal}>
          <img src={dish.url} alt={dish.title} width="200"/>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDish;
