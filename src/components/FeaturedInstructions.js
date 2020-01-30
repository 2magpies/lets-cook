import React from 'react';

//FUTURE: use: refactor instructions so that 1) I can reuse it for other features; 2) clean up App.js to be more elegant
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
