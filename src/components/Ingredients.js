import React, { useState, useEffect } from 'react';

function Ingredients(props) {
  const { meal } = props;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // 1. create an empty array to hold all of the ingredients so that you can use map to display them easily.
    const ingredientList = [];

    // 2. create a counter (an index value to use in a while loop) and start it at 1
    let i = 1;

    // 3. create a while loop, the condition will be "so long as there is a value in meal['strIngredient' + i ]

    // 3a. store the name of the ingredient

    while (meal['strIngredient' + i]) {
      const name = meal['strIngredient' + i];
      const quantity = meal['strMeasure' + i];
      ingredientList.push(quantity + ' ' + name);

      i++;
    }
    setIngredients(ingredientList);
  }, []);

  return (
    <ul>
      {ingredients.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// 3b. store the value of the corresponding measure (meal['strMeasure' + i ])
// 3c. push both into the array (concatenate them with a space between them).
// 3d. increment the index

export default Ingredients;
