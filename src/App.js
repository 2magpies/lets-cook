import React, { useState, useEffect } from 'react';
import SiteInfo from './components/SiteInfo';
import DailyRecipeSearch from './components/DailyRecipeSearch';
import SuggestedPanel from './components/SuggestedPanel';
import RecipePanel from './components/RecipePanel';
import DailyRecipeByCategory from './components/DailyRecipeByCategory';
import './App.css';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_MEALDB_API_KEY,
    api: `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALDB_API_KEY}`,
    endpoint: '/search.php?f='
  };

  // const searchCategories = {
  //   api: 'https://www.themealdb.com/api/json/v1/1/categories.php'
  // };

  const [meals, setMeals] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getMeals(searchString);
  }, []);

  function getMeals(searchString) {
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setMeals(response.meals);
        console.log(response);
        //   Set the lastSearch to the searchString value
        setLastSearch(searchString);
        //   Set the searchString in state to an empty string
        setSearchString('');
      })
      .catch(console.error);
  }
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getMeals(searchString);
  }
  return (
    <div>
      <SiteInfo />
      <DailyRecipeSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      {/* <DailyRecipeByCategory /> */}
      {/* <SuggestedPanel images={images} /> */}
      <RecipePanel meals={meals} />
    </div>
  );
}

export default App;
