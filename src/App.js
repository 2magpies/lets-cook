import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SiteInfo from './components/SiteInfo';
import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeSearchResults from './components/RecipeSearchResults';
import NextFeature from './components/NextFeature';
import './App.css';
import FeaturedDish from './components/FeaturedDish';
import FeaturedInstructions from './components/FeaturedInstructions';
import Ingredients from './components/Ingredients';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_MEALDB_API_KEY,
    api: `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALDB_API_KEY}`,
    endpoint: '/search.php?f='
  };

  const [meals, setMeals] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [random, setRandom] = useState(null);

  // useEffect(() => {
  //   getMeals(searchString);
  // }, []);

  useEffect(() => {
    getRandom();
  }, []);

  // function getMeals(searchString) {
  //   /* Build a URL from the searchOptions object */
  //   const url = `${searchOptions.api}${searchOptions.endpoint}${searchString}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(response => {
  //       setMeals(response.meals);
  //       //   Set the lastSearch to the searchString value
  //       setLastSearch(searchString);
  //       //   Set the searchString in state to an empty string
  //       setSearchString('');
  //     })
  //     .catch(console.error);
  // }

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
  // function handleChange(event) {
  //   setSearchString(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   getMeals(searchString);
  // }

  function handleNext(event) {
    event.preventDefault();
    getRandom();
  }

  return (
    <div className="grid">
      <section>
        <Header className="banner" />
        <SiteInfo />
      </section>

      {/* {random && <FeaturedDish random={random} />} */}
      <section>
        <section className="featured">
          {random && (
            <div>
              <h2>Featured Dish</h2>
              <img src={random.strMealThumb} alt={random.strMeal} width="300" />
              <h3>
                {random.strArea} {random.strMeal}
              </h3>
              <p>Category: {random.strCategory}</p>
            </div>
          )}
        </section>
        <section className="user-feature">
          <NextFeature handleNext={handleNext} />
        </section>
      </section>
      {/* <section className="instructions">
        {random && <FeaturedInstructions random={random} />}
      </section> */}
      <section className="instructions">
        {random && (
          <div>
            <h4>Ingredients</h4>
            <ul>
              {random.ingredients.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Instructions</h4>
            <p>{random.strInstructions}</p>
          </div>
        )}
      </section>

      {/* <section className="user-search">
        <RecipeSearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <RecipeSearchResults meals={meals} />
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}
export default App;
