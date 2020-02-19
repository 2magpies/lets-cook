import React, { useState, useEffect } from 'react';
import NextFeature from './NextFeature';
import { Link } from 'react-router-dom';
import LetsDrink from './LetsDrink';

function Home() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    getRandom();
  }, []);

  function getRandom() {
    /* Build a URL from the url object */
    const randomUrl = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALDB_API_KEY}/random.php`;
    fetch(randomUrl)
      .then(response => response.json())
      .then(response => {
        // 1. create an empty array to hold all of the ingredients so that you can use map to display them easily.
        const ingredientList = [];

        // 2. create a counter (an index value to use in a while loop) and start it at 1
        const meal = response.meals[0];
        let i = 1;

        // 3. create a while loop, the condition will be "so long as there is a value in meal['strIngredient' + i ]

        // 3a. store the name of the ingredient

        while (meal['strIngredient' + i]) {
          const name = meal['strIngredient' + i];
          const quantity = meal['strMeasure' + i];
          ingredientList.push(quantity + ' ' + name);

          i++;
        }
        meal.ingredients = ingredientList;
        return meal;
      })
      .then(meal => {
        setRandom(meal);
      })
      .catch(console.error);
  }

  function handleNext(event) {
    event.preventDefault();
    getRandom();
  }
  return (
    <div className="grid">
      
      <section>
        <section className="featured col-1-3 remove-gutter-xs">
          {random && (
            <div>
              <h2>Featured Dish</h2>
              <img src={random.strMealThumb} alt={random.strMeal} />
              <p>Cuisine: {random.strArea}</p>
              <p>Category: {random.strCategory}</p>
            </div>
          )}
        </section>
      </section>

      <section className="instructions ">
        {random && (
          <div className="col-1-3 remove-gutter-xs">
            <h2>{random.strMeal}</h2>
            
            <h4>Ingredients</h4>
            <ul>
              {random.ingredients.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section className="instructions ">
        {random && (
          <div className="col- remove-gutter-xs">
            <h4>Instructions</h4>
            <p>{random.strInstructions}</p>
          </div>
        )}
      </section>

      <section className="featured-form col-1-2 remove-gutter-xs">
        <NextFeature handleNext={handleNext} />
      </section>
      <section className="featured-form col-1-2 remove-gutter-xs">
        <LetsDrink />
      </section>
      
    </div>
  );
}

export default Home;
//Hou Chia helped me code the functions in this page
//I consulted Jennifer Meade to determine best approach to render a view just for the search feature (SearchPage.js); she explained steps to use react-router-dom, to move the App.js functions to a new component, Home.js
