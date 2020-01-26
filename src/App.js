import React, { useState, useEffect } from 'react';
import SiteInfo from './SiteInfo';
import DailyRecipe from './DailyRecipe';
import SuggestedPanel from './SuggestedPanel';
import RecipePanel from './RecipePanel';
import './App.css';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_MEALDB_API_KEY,
    api: 'https://www.themealdb.com/api/json/v2/',
    endpoint: '/search.php?f='
  };

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  function getMeals() {
    const searchString = 'seafood';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}?api_key=${searchOptions.key}${searchOptions.endpoint}&q=${searchString}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setMeals(response.data);
      })
      .catch(console.error);
  }

  return (
    <div>
      <SiteInfo />
      <DailyRecipe />
      {/* <SuggestedPanel images={images} /> */}
      <RecipePanel meals={meals} />
    </div>
  );
}

export default App;
