import React from 'react';

const FeaturedInstructions = random => {
  return (
    <div>
      <h4>
        {random.strArea} {random.strMeal}
      </h4>
      <div>
        <h4>Instructions</h4>
        <p>{random.strInstructions}</p>
      </div>
    </div>
  );
};
export default FeaturedInstructions;
